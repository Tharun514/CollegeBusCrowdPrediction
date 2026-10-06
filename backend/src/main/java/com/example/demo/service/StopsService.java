package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.stops;

public interface StopsService {

    stops saveStop(stops stop);

    List<stops> getAllStops();

    Optional<stops> getStopById(Long id);

    stops updateStop(Long id, stops stop);

    void deleteStop(Long id);

}