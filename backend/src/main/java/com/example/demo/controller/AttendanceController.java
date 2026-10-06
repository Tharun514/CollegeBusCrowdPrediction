package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Attendance;
import com.example.demo.service.AttendanceService;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    // Save Attendance
    @PostMapping("/save")
    public Attendance saveAttendance(@RequestBody Attendance attendance) {
        return attendanceService.saveAttendance(attendance);
    }

    // Get All Attendances
    @GetMapping("/getall")
    public List<Attendance> getAllAttendances() {
        return attendanceService.getAllAttendances();
    }

    // Get Attendance By Id
    @GetMapping("/get/{id}")
    public Optional<Attendance> getAttendanceById(@PathVariable Long id) {
        return attendanceService.getAttendanceById(id);
    }

    // Update Attendance
    @PutMapping("/update/{id}")
    public Attendance updateAttendance(@PathVariable Long id,
                                       @RequestBody Attendance attendance) {

        return attendanceService.updateAttendance(id, attendance);
    }

    // Delete Attendance
    @DeleteMapping("/delete/{id}")
    public String deleteAttendance(@PathVariable Long id) {

        attendanceService.deleteAttendance(id);
        return "Attendance Deleted Successfully";
    }

}