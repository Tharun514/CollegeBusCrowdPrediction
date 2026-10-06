package com.example.demo.serviceimple;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Attendance;
import com.example.demo.models.Attendance.ScanType;
import com.example.demo.models.Bus;
import com.example.demo.models.BusOccupancy;
import com.example.demo.models.BusOccupancy.CrowdLevel;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.repository.BusOccupancyRepository;
import com.example.demo.repository.BusRepository;
import com.example.demo.service.BusOccupancyService;

@Service
public class BusOccupancyServiceImple implements BusOccupancyService {

	@Autowired
	private BusOccupancyRepository busOccupancyRepository;

	@Autowired
	private AttendanceRepository attendanceRepository;

	@Autowired
	private BusRepository busRepository;

	@Override
	public BusOccupancy saveBusOccupancy(BusOccupancy busOccupancy) {
		return busOccupancyRepository.save(busOccupancy);
	}

	@Override
	public List<BusOccupancy> getAllBusOccupancies() {
		return busOccupancyRepository.findAll();
	}

	@Override
	public Optional<BusOccupancy> getBusOccupancyById(Long id) {
		return busOccupancyRepository.findById(id);
	}

	@Override
	public BusOccupancy updateBusOccupancy(Long id, BusOccupancy busOccupancy) {

		BusOccupancy existingBusOccupancy = busOccupancyRepository.findById(id).orElse(null);

		if (existingBusOccupancy != null) {

			existingBusOccupancy.setBusId(busOccupancy.getBusId());
			existingBusOccupancy.setOccupied(busOccupancy.getOccupied());
			existingBusOccupancy.setAvailable(busOccupancy.getAvailable());
			existingBusOccupancy.setOccupancyPercentage(busOccupancy.getOccupancyPercentage());
			existingBusOccupancy.setCrowdLevel(busOccupancy.getCrowdLevel());
			existingBusOccupancy.setUpdatedTime(busOccupancy.getUpdatedTime());

			return busOccupancyRepository.save(existingBusOccupancy);
		}

		return null;
	}

	@Override
	public void deleteBusOccupancy(Long id) {
		busOccupancyRepository.deleteById(id);
	}

	@Override
	public void calculateBusOccupancy(Long busId) {

		// Get Bus
		Bus bus = busRepository.findById(busId).orElse(null);

		if (bus == null) {
			return;
		}

		// Get Attendance Records
		List<Attendance> attendanceList = attendanceRepository.findByBusId(busId);

		int occupied = 0;

		for (Attendance attendance : attendanceList) {

			if (attendance.getScanType() == ScanType.BOARDING) {
				occupied++;
			} else if (attendance.getScanType() == ScanType.ALIGHTING) {
				occupied--;
			}
		}

		// Prevent negative occupancy
		if (occupied < 0) {
			occupied = 0;
		}

		int capacity = bus.getCapacity();

		// Safety check
		if (capacity <= 0) {
			capacity = 50;
		}

		// Prevent occupied > capacity
		if (occupied > capacity) {
			occupied = capacity;
		}

		int available = capacity - occupied;

		BigDecimal occupancyPercentage = BigDecimal.valueOf((occupied * 100.0) / capacity).setScale(2,
				RoundingMode.HALF_UP);

		CrowdLevel crowdLevel;

		if (occupancyPercentage.doubleValue() <= 25) {
			crowdLevel = CrowdLevel.LOW;
		} else if (occupancyPercentage.doubleValue() <= 50) {
			crowdLevel = CrowdLevel.MEDIUM;
		} else if (occupancyPercentage.doubleValue() <= 80) {
			crowdLevel = CrowdLevel.HIGH;
		} else {
			crowdLevel = CrowdLevel.FULL;
		}

		// Find existing occupancy record
		BusOccupancy busOccupancy = busOccupancyRepository.findByBusId(busId).orElse(new BusOccupancy());

		// Update values
		busOccupancy.setBusId(busId);
		busOccupancy.setOccupied(occupied);
		busOccupancy.setAvailable(available);
		busOccupancy.setOccupancyPercentage(occupancyPercentage);
		busOccupancy.setCrowdLevel(crowdLevel);
		busOccupancy.setUpdatedTime(LocalDateTime.now());

		// Save
		busOccupancyRepository.save(busOccupancy);
	}

	@Override
	public Optional<BusOccupancy> getBusOccupancyByBusId(Long busId) {
		return busOccupancyRepository.findByBusId(busId);
	}
}