package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Bus;

public interface BusService {

	Bus saveBus(Bus bus);

	List<Bus> getAllBuses();

	Optional<Bus> getBusById(Long id);

	Bus updateBus(Long id, Bus bus);

	void deleteBus(Long id);

	Optional<Bus> getBusByBusNo(String busNo);

}