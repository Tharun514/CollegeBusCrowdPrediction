package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.RealTimeTracking;

public interface RealTimeTrackingService {

	RealTimeTracking saveRealTimeTracking(RealTimeTracking realTimeTracking);

	List<RealTimeTracking> getAllRealTimeTrackings();

	Optional<RealTimeTracking> getRealTimeTrackingById(Long id);

	RealTimeTracking updateRealTimeTracking(Long id, RealTimeTracking realTimeTracking);

	void deleteRealTimeTracking(Long id);

	// NEW
	Optional<RealTimeTracking> getLatestTrackingByBusNo(String busNo);

}