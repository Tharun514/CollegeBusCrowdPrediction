package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.RealTimeTracking;
import com.example.demo.service.RealTimeTrackingService;

@RestController
@RequestMapping("/realtimetracking")
@CrossOrigin(origins = "http://localhost:4200")
public class RealTimeTrackingController {

	@Autowired
	private RealTimeTrackingService realTimeTrackingService;

	// Save Real Time Tracking
	@PostMapping("/save")
	public RealTimeTracking saveRealTimeTracking(@RequestBody RealTimeTracking realTimeTracking) {

		return realTimeTrackingService.saveRealTimeTracking(realTimeTracking);
	}

	// Get All Real Time Tracking Records
	@GetMapping("/getall")
	public List<RealTimeTracking> getAllRealTimeTrackings() {

		return realTimeTrackingService.getAllRealTimeTrackings();
	}

	// Get Real Time Tracking By Id
	@GetMapping("/get/{id}")
	public Optional<RealTimeTracking> getRealTimeTrackingById(@PathVariable Long id) {

		return realTimeTrackingService.getRealTimeTrackingById(id);
	}

	// Update Real Time Tracking
	@PutMapping("/update/{id}")
	public RealTimeTracking updateRealTimeTracking(@PathVariable Long id,
			@RequestBody RealTimeTracking realTimeTracking) {

		return realTimeTrackingService.updateRealTimeTracking(id, realTimeTracking);
	}

	// Delete Real Time Tracking
	@DeleteMapping("/delete/{id}")
	public String deleteRealTimeTracking(@PathVariable Long id) {

		realTimeTrackingService.deleteRealTimeTracking(id);
		return "Real Time Tracking Deleted Successfully";
	}

	@GetMapping("/bus/{busNo}")
	public Optional<RealTimeTracking> getLatestTrackingByBusNo(@PathVariable String busNo) {

		return realTimeTrackingService.getLatestTrackingByBusNo(busNo);
	}

}