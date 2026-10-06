package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.BusLocation;

public interface BusLocationService {

    BusLocation saveBusLocation(BusLocation busLocation);

    List<BusLocation> getAllBusLocations();

    Optional<BusLocation> getBusLocationById(Long id);

    BusLocation updateBusLocation(Long id, BusLocation busLocation);

    void deleteBusLocation(Long id);

}