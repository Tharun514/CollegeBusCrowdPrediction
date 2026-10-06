package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.BusDelay;
import com.example.demo.service.BusDelayService;

@RestController
@RequestMapping("/busdelay")
@CrossOrigin(origins = "http://localhost:4200")
public class BusDelayController {

    @Autowired
    private BusDelayService busDelayService;

    // Save Bus Delay
    @PostMapping("/save")
    public BusDelay saveBusDelay(@RequestBody BusDelay busDelay) {
        return busDelayService.saveBusDelay(busDelay);
    }

    // Get All Bus Delays
    @GetMapping("/getall")
    public List<BusDelay> getAllBusDelays() {
        return busDelayService.getAllBusDelays();
    }

    // Get Bus Delay By Id
    @GetMapping("/get/{id}")
    public Optional<BusDelay> getBusDelayById(@PathVariable Long id) {
        return busDelayService.getBusDelayById(id);
    }

    // Update Bus Delay
    @PutMapping("/update/{id}")
    public BusDelay updateBusDelay(@PathVariable Long id,
                                    @RequestBody BusDelay busDelay) {

        return busDelayService.updateBusDelay(id, busDelay);
    }

    // Delete Bus Delay
    @DeleteMapping("/delete/{id}")
    public String deleteBusDelay(@PathVariable Long id) {

        busDelayService.deleteBusDelay(id);
        return "Bus Delay Deleted Successfully";
    }

}