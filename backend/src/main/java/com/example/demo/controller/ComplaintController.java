package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Complaint;
import com.example.demo.service.ComplaintService;

@RestController
@RequestMapping("/complaint")
@CrossOrigin(origins = "http://localhost:4200")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    // Save Complaint
    @PostMapping("/save")
    public Complaint saveComplaint(@RequestBody Complaint complaint) {
        return complaintService.saveComplaint(complaint);
    }

    // Get All Complaints
    @GetMapping("/getall")
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    // Get Complaint By Id
    @GetMapping("/get/{id}")
    public Optional<Complaint> getComplaintById(@PathVariable Long id) {
        return complaintService.getComplaintById(id);
    }

    // Update Complaint
    @PutMapping("/update/{id}")
    public Complaint updateComplaint(@PathVariable Long id,
                                     @RequestBody Complaint complaint) {

        return complaintService.updateComplaint(id, complaint);
    }

    // Delete Complaint
    @DeleteMapping("/delete/{id}")
    public String deleteComplaint(@PathVariable Long id) {

        complaintService.deleteComplaint(id);
        return "Complaint Deleted Successfully";
    }

}