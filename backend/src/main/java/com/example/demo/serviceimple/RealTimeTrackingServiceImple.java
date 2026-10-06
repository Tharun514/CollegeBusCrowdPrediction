package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Bus;
import com.example.demo.models.RealTimeTracking;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.RealTimeTrackingRepository;
import com.example.demo.service.RealTimeTrackingService;

@Service
public class RealTimeTrackingServiceImple implements RealTimeTrackingService {

	@Autowired
	private RealTimeTrackingRepository realTimeTrackingRepository;

	@Autowired
	private BusRepository busRepository;

	@Override
	public RealTimeTracking saveRealTimeTracking(RealTimeTracking realTimeTracking) {
		return realTimeTrackingRepository.save(realTimeTracking);
	}

	@Override
	public List<RealTimeTracking> getAllRealTimeTrackings() {
		return realTimeTrackingRepository.findAll();
	}

	@Override
	public Optional<RealTimeTracking> getRealTimeTrackingById(Long id) {
		return realTimeTrackingRepository.findById(id);
	}

	@Override
	public RealTimeTracking updateRealTimeTracking(Long id, RealTimeTracking realTimeTracking) {

		RealTimeTracking existingRealTimeTracking = realTimeTrackingRepository.findById(id).orElse(null);

		if (existingRealTimeTracking != null) {

			existingRealTimeTracking.setBusId(realTimeTracking.getBusId());
			existingRealTimeTracking.setLatitude(realTimeTracking.getLatitude());
			existingRealTimeTracking.setLongitude(realTimeTracking.getLongitude());
			existingRealTimeTracking.setCurrentSpeed(realTimeTracking.getCurrentSpeed());
			existingRealTimeTracking.setCurrentStop(realTimeTracking.getCurrentStop());
			existingRealTimeTracking.setNextStop(realTimeTracking.getNextStop());
			existingRealTimeTracking.setEtaMinutes(realTimeTracking.getEtaMinutes());
			existingRealTimeTracking.setTrackingTime(realTimeTracking.getTrackingTime());

			return realTimeTrackingRepository.save(existingRealTimeTracking);
		}

		return null;
	}

	@Override
	public void deleteRealTimeTracking(Long id) {
		realTimeTrackingRepository.deleteById(id);
	}

	@Override
	public Optional<RealTimeTracking> getLatestTrackingByBusNo(String busNo) {

		Bus bus = busRepository.findByBusNo(busNo).orElse(null);

		if (bus == null) {
			return Optional.empty();
		}

		return realTimeTrackingRepository.findTopByBusIdOrderByTrackingTimeDesc(bus.getBusId());
	}

}