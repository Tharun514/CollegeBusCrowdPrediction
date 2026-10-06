package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.fleetrouting;

public interface FleetRoutingService {

    fleetrouting saveFleetRouting(fleetrouting fleetRouting);

    List<fleetrouting> getAllFleetRoutings();

    Optional<fleetrouting> getFleetRoutingById(Long id);

    fleetrouting updateFleetRouting(Long id, fleetrouting fleetRouting);

    void deleteFleetRouting(Long id);

}