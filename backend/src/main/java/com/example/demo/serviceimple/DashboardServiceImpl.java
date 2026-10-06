package com.example.demo.serviceimple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.DashboardDTO;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.DriverRepository;
import com.example.demo.repository.RouteRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    @Override
    public DashboardDTO getDashboardCounts() {

        DashboardDTO dashboard = new DashboardDTO();

        dashboard.setTotalStudents(studentRepository.count());
        dashboard.setTotalDrivers(driverRepository.count());
        dashboard.setTotalBuses(busRepository.count());
        dashboard.setTotalRoutes(routeRepository.count());
        dashboard.setTotalAttendance(attendanceRepository.count());
        dashboard.setTotalComplaints(complaintRepository.count());

        return dashboard;
    }

}