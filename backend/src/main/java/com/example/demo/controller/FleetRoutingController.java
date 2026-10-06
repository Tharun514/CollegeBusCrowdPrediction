package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.fleetrouting;
import com.example.demo.service.FleetRoutingService;

@RestController
@RequestMapping("/fleetrouting")
@CrossOrigin(origins = "*")
public class FleetRoutingController {

    @Autowired
    private FleetRoutingService fleetRoutingService;

    // Save Fleet Routing
    @PostMapping("/save")
    public fleetrouting saveFleetRouting(@RequestBody fleetrouting fleetRouting) {
        return fleetRoutingService.saveFleetRouting(fleetRouting);
    }

    // Get All Fleet Routings
    @GetMapping("/getall")
    public List<fleetrouting> getAllFleetRoutings() {
        return fleetRoutingService.getAllFleetRoutings();
    }

    // Get Fleet Routing By Id
    @GetMapping("/get/{id}")
    public Optional<fleetrouting> getFleetRoutingById(@PathVariable Long id) {
        return fleetRoutingService.getFleetRoutingById(id);
    }

    // Update Fleet Routing
    @PutMapping("/update/{id}")
    public fleetrouting updateFleetRouting(@PathVariable Long id,
                                            @RequestBody fleetrouting fleetRouting) {

        return fleetRoutingService.updateFleetRouting(id, fleetRouting);
    }

    // Delete Fleet Routing
    @DeleteMapping("/delete/{id}")
    public String deleteFleetRouting(@PathVariable Long id) {

        fleetRoutingService.deleteFleetRouting(id);
        return "Fleet Routing Deleted Successfully";
    }

}