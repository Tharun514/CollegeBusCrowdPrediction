import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { Bus } from 'src/app/models/bus';
import { RealTimeTracking } from 'src/app/models/real-time-tracking';
import { BusService } from 'src/app/services/bus.service';
import { BusLocationService } from 'src/app/services/bus-location.service';
import { BusLocation } from 'src/app/models/bus-location';
delete (L.Icon.Default.prototype as any)._getIconUrl;
import { StudentBusAssignmentService } from 'src/app/services/student-bus-assignment.service';
import { StudentBusAssignment } from 'src/app/models/student-bus-assignment';
import { ToastService } from 'src/app/services/toast.service';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
  iconUrl: 'assets/leaflet/marker-icon.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png'
});

@Component({
  selector: 'app-live-bus-tracking',
  templateUrl: './live-bus-tracking.component.html',
  styleUrls: ['./live-bus-tracking.component.css']
})
export class LiveBusTrackingComponent implements OnInit, OnDestroy {

  buses: Bus[] = [];

  selectedBus = '';

  studentId!: number;

  assignedBusId!: number;

  tracking?: BusLocation;

  loading = false;

  map!: L.Map;

  marker!: L.Marker;

  // Route line
  routeLine!: L.Polyline;

  // Stores all route points
  routeCoordinates: L.LatLngExpression[] = [];

  // Previous position
  previousLat = 0;

  previousLng = 0;

  refreshInterval: any;
  constructor(
    private busService: BusService,
    private busLocationService: BusLocationService,
    private studentBusAssignmentService: StudentBusAssignmentService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {

    const id = sessionStorage.getItem('studentId');

    if (!id) {
      alert('Student not logged in.');
      return;
    }

    this.studentId = Number(id);

    this.loadAssignedBus();

  }

  loadAssignedBus(): void {

    this.studentBusAssignmentService
      .getAssignmentByStudentId(this.studentId)
      .subscribe({

        next: (assignment: StudentBusAssignment) => {

          this.assignedBusId = assignment.busId;

          this.busService.getAllBuses().subscribe({

            next: (buses: Bus[]) => {

              const bus = buses.find(
                b => b.busId === this.assignedBusId
              );

              if (bus) {
                this.selectedBus = bus.busNo;
              }

            },

            error: (err) => console.error(err)

          });

        },

        error: (err) => {
          console.error(err);
          alert('No bus assigned to this student.');
        }

      });

  }

  ngOnDestroy(): void {

    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }

    if (this.map) {
      this.map.remove();
    }

  }

  loadBuses(): void {

    this.busService.getAllBuses().subscribe({

      next: (data: Bus[]) => {
        this.buses = data;
      },

      error: (err) => {
        console.error(err);
        alert('Unable to load buses.');
      }

    });

  }

  trackBus(): void {

    if (!this.selectedBus) {

      alert('Please select a bus');

      return;

    }

    this.toast.success(`Tracking bus ${this.selectedBus}`);

    this.loadTracking();

    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }

    this.refreshInterval = setInterval(() => {
      this.loadTracking();
    }, 10000);

  }

  loadTracking(): void {

    this.loading = true;

    this.busLocationService.getAllLocations().subscribe({

      next: (data: BusLocation[]) => {

        this.loading = false;

        if (!data || data.length === 0) {

          alert('No bus locations found.');
          return;

        }

        const busLocation = data.find(
          location => location.busId === this.assignedBusId
        );

        if (!busLocation) {

          alert('Live location not available for your assigned bus.');
          return;

        }

        this.tracking = busLocation;

        this.loadMap();

      },

      error: (err) => {

        console.error(err);

        this.loading = false;

        alert('Unable to load bus location.');

      }

    });

  }
  loadMap(): void {

    if (!this.tracking) {
      return;
    }

    const lat = Number(this.tracking.latitude);
    const lng = Number(this.tracking.longitude);

    if (isNaN(lat) || isNaN(lng)) {
      return;
    }

    // First time creating map
    if (!this.map) {

      this.map = L.map('map', {
        scrollWheelZoom: false,
        zoomControl: true,
        doubleClickZoom: true,
        touchZoom: true
      }).setView([lat, lng], 15);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; OpenStreetMap contributors'
        }
      ).addTo(this.map);

      this.marker = L.marker([lat, lng]).addTo(this.map);

      // Create first route point
      this.routeCoordinates.push([lat, lng]);

      this.routeLine = L.polyline(this.routeCoordinates, {
        color: '#2563eb',
        weight: 5,
        opacity: 0.8
      }).addTo(this.map);

      this.previousLat = lat;
      this.previousLng = lng;

    } else {

      this.animateMarker(
        this.previousLat,
        this.previousLng,
        lat,
        lng
      );

      this.previousLat = lat;
      this.previousLng = lng;

    }

    this.marker.bindPopup(
      `<b>Bus ${this.selectedBus}</b><br>
   Speed: ${this.tracking?.speed ?? 0} km/h<br>
   Latitude: ${this.tracking?.latitude}<br>
   Longitude: ${this.tracking?.longitude}<br>
   Updated: ${this.tracking?.timestamp}`
    );

  }
  animateMarker(
    startLat: number,
    startLng: number,
    endLat: number,
    endLng: number
  ): void {

    const duration = 1000;

    const frames = 60;

    let frame = 0;

    const deltaLat = (endLat - startLat) / frames;

    const deltaLng = (endLng - startLng) / frames;

    const interval = setInterval(() => {

      frame++;

      const currentLat = startLat + deltaLat * frame;

      const currentLng = startLng + deltaLng * frame;

      this.marker.setLatLng([currentLat, currentLng]);

      // Add current point to route
      this.routeCoordinates.push([currentLat, currentLng]);

      // Keep only last 200 points
      if (this.routeCoordinates.length > 200) {
        this.routeCoordinates.shift();
      }

      this.routeLine.setLatLngs(this.routeCoordinates);

      this.map.panTo([currentLat, currentLng], {
        animate: false
      });

      if (frame >= frames) {

        clearInterval(interval);

        this.marker.setLatLng([endLat, endLng]);

        this.map.panTo([endLat, endLng]);

      }

    }, duration / frames);

  }


}