package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.BusOccupancy;

public interface BusOccupancyService {

	// Save Bus Occupancy
	BusOccupancy saveBusOccupancy(BusOccupancy busOccupancy);

	// Get All Bus Occupancies
	List<BusOccupancy> getAllBusOccupancies();

	// Get Bus Occupancy By Database Id
	Optional<BusOccupancy> getBusOccupancyById(Long id);

	// Get Bus Occupancy By Bus Id
	Optional<BusOccupancy> getBusOccupancyByBusId(Long busId);

	// Update Bus Occupancy
	BusOccupancy updateBusOccupancy(Long id, BusOccupancy busOccupancy);

	// Delete Bus Occupancy
	void deleteBusOccupancy(Long id);

	// Calculate Occupancy Automatically
	void calculateBusOccupancy(Long busId);

}