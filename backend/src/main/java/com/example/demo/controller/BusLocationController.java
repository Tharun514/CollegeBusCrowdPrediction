package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.BusLocation;
import com.example.demo.service.BusLocationService;

@RestController
@RequestMapping("/buslocation")
@CrossOrigin(origins = "http://localhost:4200")
public class BusLocationController {

    @Autowired
    private BusLocationService busLocationService;

    // Save Bus Location
    @PostMapping("/save")
    public BusLocation saveBusLocation(@RequestBody BusLocation busLocation) {
        return busLocationService.saveBusLocation(busLocation);
    }

    // Get All Bus Locations
    @GetMapping("/getall")
    public List<BusLocation> getAllBusLocations() {
        return busLocationService.getAllBusLocations();
    }

    // Get Bus Location By Id
    @GetMapping("/get/{id}")
    public Optional<BusLocation> getBusLocationById(@PathVariable Long id) {
        return busLocationService.getBusLocationById(id);
    }

    // Update Bus Location
    @PutMapping("/update/{id}")
    public BusLocation updateBusLocation(@PathVariable Long id,
            @RequestBody BusLocation busLocation) {

        return busLocationService.updateBusLocation(id, busLocation);
    }

    // Delete Bus Location
    @DeleteMapping("/delete/{id}")
    public String deleteBusLocation(@PathVariable Long id) {

        busLocationService.deleteBusLocation(id);
        return "Bus Location Deleted Successfully";
    }

}