package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Bus;
import com.example.demo.repository.BusRepository;
import com.example.demo.service.BusService;

@Service
public class BusServiceImple implements BusService {

	@Autowired
	private BusRepository busRepository;

	@Override
	public Bus saveBus(Bus bus) {
		return busRepository.save(bus);
	}

	@Override
	public List<Bus> getAllBuses() {
		return busRepository.findAll();
	}

	@Override
	public Optional<Bus> getBusById(Long id) {
		return busRepository.findById(id);
	}

	@Override
	public Bus updateBus(Long id, Bus bus) {

		Bus existingBus = busRepository.findById(id).orElse(null);

		if (existingBus != null) {

			existingBus.setBusNo(bus.getBusNo());
			existingBus.setRegistrationNumber(bus.getRegistrationNumber());
			existingBus.setCapacity(bus.getCapacity());
			existingBus.setCurrentLat(bus.getCurrentLat());
			existingBus.setCurrentLng(bus.getCurrentLng());
			existingBus.setStatus(bus.getStatus());
			existingBus.setDriverId(bus.getDriverId());
			existingBus.setRouteId(bus.getRouteId());
			existingBus.setSpeed(bus.getSpeed());
			existingBus.setCurrentStop(bus.getCurrentStop());
			existingBus.setNextStop(bus.getNextStop());

			return busRepository.save(existingBus);
		}

		return null;
	}

	@Override
	public void deleteBus(Long id) {
		busRepository.deleteById(id);
	}

	@Override
	public Optional<Bus> getBusByBusNo(String busNo) {

		return busRepository.findByBusNo(busNo);

	}

}