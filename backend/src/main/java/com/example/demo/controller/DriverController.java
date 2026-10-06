package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Driver;
import com.example.demo.service.DriverService;

@RestController
@RequestMapping("/driver")
@CrossOrigin(origins = "http://localhost:4200")
public class DriverController {

    @Autowired
    private DriverService driverService;

    // Save Driver
    @PostMapping("/save")
    public Driver saveDriver(@RequestBody Driver driver) {
        return driverService.saveDriver(driver);
    }

    // Get All Drivers
    @GetMapping("/getall")
    public List<Driver> getAllDrivers() {
        return driverService.getAllDrivers();
    }

    // Get Driver By Id
    @GetMapping("/get/{id}")
    public Optional<Driver> getDriverById(@PathVariable Long id) {
        return driverService.getDriverById(id);
    }

    // Update Driver
    @PutMapping("/update/{id}")
    public Driver updateDriver(@PathVariable Long id,
                               @RequestBody Driver driver) {
        return driverService.updateDriver(id, driver);
    }

    // Delete Driver
    @DeleteMapping("/delete/{id}")
    public String deleteDriver(@PathVariable Long id) {
        driverService.deleteDriver(id);
        return "Driver Deleted Successfully";
    }

}