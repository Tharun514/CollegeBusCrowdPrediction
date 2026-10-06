package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Attendance;

public interface AttendanceService {

    Attendance saveAttendance(Attendance attendance);

    List<Attendance> getAllAttendances();

    Optional<Attendance> getAttendanceById(Long id);

    Attendance updateAttendance(Long id, Attendance attendance);

    void deleteAttendance(Long id);

}