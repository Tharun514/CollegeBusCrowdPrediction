package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.fleetrouting;
import com.example.demo.repository.FleetRoutingRepository;
import com.example.demo.service.FleetRoutingService;

@Service
public class FleetRoutingServiceImple implements FleetRoutingService {

    @Autowired
    private FleetRoutingRepository fleetRoutingRepository;

    @Override
    public fleetrouting saveFleetRouting(fleetrouting fleetRouting) {
        return fleetRoutingRepository.save(fleetRouting);
    }

    @Override
    public List<fleetrouting> getAllFleetRoutings() {
        return fleetRoutingRepository.findAll();
    }

    @Override
    public Optional<fleetrouting> getFleetRoutingById(Long id) {
        return fleetRoutingRepository.findById(id);
    }

    @Override
    public fleetrouting updateFleetRouting(Long id, fleetrouting fleetRouting) {

        fleetrouting existingFleetRouting =
                fleetRoutingRepository.findById(id).orElse(null);

        if (existingFleetRouting != null) {

            existingFleetRouting.setBusId(fleetRouting.getBusId());
            existingFleetRouting.setRouteId(fleetRouting.getRouteId());
            existingFleetRouting.setStartLocation(fleetRouting.getStartLocation());
            existingFleetRouting.setDestination(fleetRouting.getDestination());
            existingFleetRouting.setDistance(fleetRouting.getDistance());
            existingFleetRouting.setEstimatedTime(fleetRouting.getEstimatedTime());
            existingFleetRouting.setStatus(fleetRouting.getStatus());
            existingFleetRouting.setCreatedAt(fleetRouting.getCreatedAt());

            return fleetRoutingRepository.save(existingFleetRouting);
        }

        return null;
    }

    @Override
    public void deleteFleetRouting(Long id) {
        fleetRoutingRepository.deleteById(id);
    }

}