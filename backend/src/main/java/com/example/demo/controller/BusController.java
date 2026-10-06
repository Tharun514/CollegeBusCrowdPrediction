package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Bus;
import com.example.demo.service.BusService;

@RestController
@RequestMapping("/bus")
@CrossOrigin(origins = "http://localhost:4200")
public class BusController {

	@Autowired
	private BusService busService;

	// Save Bus
	@PostMapping("/save")
	public Bus saveBus(@RequestBody Bus bus) {
		return busService.saveBus(bus);
	}

	// Get All Buses
	@GetMapping("/getall")
	public List<Bus> getAllBuses() {
		return busService.getAllBuses();
	}

	// Get Bus By Id
	@GetMapping("/get/{id}")
	public Optional<Bus> getBusById(@PathVariable Long id) {
		return busService.getBusById(id);
	}

	// Update Bus
	@PutMapping("/update/{id}")
	public Bus updateBus(@PathVariable Long id, @RequestBody Bus bus) {
		return busService.updateBus(id, bus);
	}

	// Delete Bus
	@DeleteMapping("/delete/{id}")
	public String deleteBus(@PathVariable Long id) {
		busService.deleteBus(id);
		return "Bus Deleted Successfully";
	}

	@GetMapping("/busno/{busNo}")
	public Optional<Bus> getBusByBusNo(@PathVariable String busNo) {

		return busService.getBusByBusNo(busNo);

	}

}