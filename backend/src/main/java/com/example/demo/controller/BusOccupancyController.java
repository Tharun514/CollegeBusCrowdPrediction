package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Bus;
import com.example.demo.models.BusOccupancy;
import com.example.demo.repository.BusRepository;
import com.example.demo.service.BusOccupancyService;

@RestController
@RequestMapping("/busoccupancy")
@CrossOrigin(origins = "http://localhost:4200")
public class BusOccupancyController {

	@Autowired
	private BusOccupancyService busOccupancyService;

	@Autowired
	private BusRepository busRepository;

	// Save Bus Occupancy
	@PostMapping("/save")
	public BusOccupancy saveBusOccupancy(@RequestBody BusOccupancy busOccupancy) {
		return busOccupancyService.saveBusOccupancy(busOccupancy);
	}

	// Get All Bus Occupancies
	@GetMapping("/getall")
	public List<BusOccupancy> getAllBusOccupancies() {
		return busOccupancyService.getAllBusOccupancies();
	}

	// Get Bus Occupancy By Database Id
	@GetMapping("/get/{id}")
	public Optional<BusOccupancy> getBusOccupancyById(@PathVariable Long id) {
		return busOccupancyService.getBusOccupancyById(id);
	}

	// Get Bus Occupancy By Bus Id
	@GetMapping("/bus/{busId}")
	public Optional<BusOccupancy> getBusOccupancyByBusId(@PathVariable Long busId) {
		return busOccupancyService.getBusOccupancyByBusId(busId);
	}

	// Update Bus Occupancy
	@PutMapping("/update/{id}")
	public BusOccupancy updateBusOccupancy(@PathVariable Long id, @RequestBody BusOccupancy busOccupancy) {

		return busOccupancyService.updateBusOccupancy(id, busOccupancy);
	}

	// Delete Bus Occupancy
	@DeleteMapping("/delete/{id}")
	public String deleteBusOccupancy(@PathVariable Long id) {

		busOccupancyService.deleteBusOccupancy(id);

		return "Bus Occupancy Deleted Successfully";
	}

	@PostMapping("/generate/{busId}")
	public String generateBusOccupancy(@PathVariable Long busId) {

		busOccupancyService.calculateBusOccupancy(busId);

		return "Bus Occupancy Generated Successfully";
	}

	@PostMapping("/generateall")
	public String generateAllOccupancies() {

		List<Bus> buses = busRepository.findAll(); 

		for (Bus bus : buses) {
			busOccupancyService.calculateBusOccupancy(bus.getBusId());
		}

		return "All Bus Occupancies Generated Successfully";
	}

}