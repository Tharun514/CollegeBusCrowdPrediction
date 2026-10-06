package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Route;
import com.example.demo.service.RouteService;

@RestController
@RequestMapping("/route")
@CrossOrigin(origins = "http://localhost:4200")
public class RouteController {

    @Autowired
    private RouteService routeService;

    // Save Route
    @PostMapping("/save")
    public Route saveRoute(@RequestBody Route route) {
        return routeService.saveRoute(route);
    }

    // Get All Routes
    @GetMapping("/getall")
    public List<Route> getAllRoutes() {
        return routeService.getAllRoutes();
    }

    // Get Route By Id
    @GetMapping("/get/{id}")
    public Optional<Route> getRouteById(@PathVariable Long id) {
        return routeService.getRouteById(id);
    }

    // Update Route
    @PutMapping("/update/{id}")
    public Route updateRoute(@PathVariable Long id,
                             @RequestBody Route route) {
        return routeService.updateRoute(id, route);
    }

    // Delete Route
    @DeleteMapping("/delete/{id}")
    public String deleteRoute(@PathVariable Long id) {
        routeService.deleteRoute(id);
        return "Route Deleted Successfully";
    }

}