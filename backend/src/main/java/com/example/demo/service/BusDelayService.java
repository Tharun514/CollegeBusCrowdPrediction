package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.BusDelay;

public interface BusDelayService {

    BusDelay saveBusDelay(BusDelay busDelay);

    List<BusDelay> getAllBusDelays();

    Optional<BusDelay> getBusDelayById(Long id);

    BusDelay updateBusDelay(Long id, BusDelay busDelay);

    void deleteBusDelay(Long id);

}