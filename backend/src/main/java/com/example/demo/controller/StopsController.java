package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.stops;
import com.example.demo.service.StopsService;

@RestController
@RequestMapping("/stops")
@CrossOrigin(origins = "http://localhost:4200")
public class StopsController {

    @Autowired
    private StopsService stopsService;

    // Save Stop
    @PostMapping("/save")
    public stops saveStop(@RequestBody stops stop) {
        return stopsService.saveStop(stop);
    }

    // Get All Stops
    @GetMapping("/getall")
    public List<stops> getAllStops() {
        return stopsService.getAllStops();
    }

    // Get Stop By Id
    @GetMapping("/get/{id}")
    public Optional<stops> getStopById(@PathVariable Long id) {
        return stopsService.getStopById(id);
    }

    // Update Stop
    @PutMapping("/update/{id}")
    public stops updateStop(@PathVariable Long id,
                            @RequestBody stops stop) {
        return stopsService.updateStop(id, stop);
    }

    // Delete Stop
    @DeleteMapping("/delete/{id}")
    public String deleteStop(@PathVariable Long id) {
        stopsService.deleteStop(id);
        return "Stop Deleted Successfully";
    }

}