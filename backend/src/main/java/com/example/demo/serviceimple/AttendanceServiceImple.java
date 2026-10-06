package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Attendance;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.service.AttendanceService;
import com.example.demo.service.BusOccupancyService;

@Service
public class AttendanceServiceImple implements AttendanceService {

	@Autowired
	private AttendanceRepository attendanceRepository;

	@Autowired
	private BusOccupancyService busOccupancyService;

	@Override
	public Attendance saveAttendance(Attendance attendance) {

		Attendance savedAttendance = attendanceRepository.save(attendance);

		// Recalculate Bus Occupancy
		busOccupancyService.calculateBusOccupancy(savedAttendance.getBusId());

		return savedAttendance;
	}

	@Override
	public List<Attendance> getAllAttendances() {
		return attendanceRepository.findAll();
	}

	@Override
	public Optional<Attendance> getAttendanceById(Long id) {
		return attendanceRepository.findById(id);
	}

	@Override
	public Attendance updateAttendance(Long id, Attendance attendance) {

		Attendance existingAttendance = attendanceRepository.findById(id).orElse(null);

		if (existingAttendance != null) {

			existingAttendance.setStudentId(attendance.getStudentId());
			existingAttendance.setBusId(attendance.getBusId());
			existingAttendance.setScanTime(attendance.getScanTime());
			existingAttendance.setScanType(attendance.getScanType());
			existingAttendance.setCreatedAt(attendance.getCreatedAt());

			Attendance updatedAttendance = attendanceRepository.save(existingAttendance);

			// Recalculate Bus Occupancy
			busOccupancyService.calculateBusOccupancy(updatedAttendance.getBusId());

			return updatedAttendance;
		}

		return null;
	}

	@Override
	public void deleteAttendance(Long id) {

		Attendance attendance = attendanceRepository.findById(id).orElse(null);

		if (attendance != null) {

			Long busId = attendance.getBusId();

			attendanceRepository.deleteById(id);

			// Recalculate Bus Occupancy
			busOccupancyService.calculateBusOccupancy(busId);
		}
	}

}