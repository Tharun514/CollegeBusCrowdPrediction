package com.example.demo.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fleet_routing")
public class fleetrouting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fleet_id")
    private Long fleetId;

    @Column(name = "bus_id", nullable = false)
    private Long busId;

    @Column(name = "route_id", nullable = false)
    private Long routeId;

    @Column(name = "start_location")
    private String startLocation;

    @Column(name = "destination")
    private String destination;

    @Column(name = "distance")
    private BigDecimal distance;

    @Column(name = "estimated_time")
    private Integer estimatedTime;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Default Constructor
    public fleetrouting() {
    }

    // Parameterized Constructor
    public fleetrouting(Long fleetId, Long busId, Long routeId,
            String startLocation, String destination,
            BigDecimal distance, Integer estimatedTime,
            String status, LocalDateTime createdAt) {

        this.fleetId = fleetId;
        this.busId = busId;
        this.routeId = routeId;
        this.startLocation = startLocation;
        this.destination = destination;
        this.distance = distance;
        this.estimatedTime = estimatedTime;
        this.status = status;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getFleetId() {
        return fleetId;
    }

    public void setFleetId(Long fleetId) {
        this.fleetId = fleetId;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public String getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(String startLocation) {
        this.startLocation = startLocation;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public BigDecimal getDistance() {
        return distance;
    }

    public void setDistance(BigDecimal distance) {
        this.distance = distance;
    }

    public Integer getEstimatedTime() {
        return estimatedTime;
    }

    public void setEstimatedTime(Integer estimatedTime) {
        this.estimatedTime = estimatedTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "fleet_routing{" +
                "fleetId=" + fleetId +
                ", busId=" + busId +
                ", routeId=" + routeId +
                ", startLocation='" + startLocation + '\'' +
                ", destination='" + destination + '\'' +
                ", distance=" + distance +
                ", estimatedTime=" + estimatedTime +
                ", status='" + status + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}