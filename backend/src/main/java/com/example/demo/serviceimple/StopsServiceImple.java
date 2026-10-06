package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.stops;
import com.example.demo.repository.StopsRepository;
import com.example.demo.service.StopsService;

@Service
public class StopsServiceImple implements StopsService {

    @Autowired
    private StopsRepository stopsRepository;

    @Override
    public stops saveStop(stops stop) {
        return stopsRepository.save(stop);
    }

    @Override
    public List<stops> getAllStops() {
        return stopsRepository.findAll();
    }

    @Override
    public Optional<stops> getStopById(Long id) {
        return stopsRepository.findById(id);
    }

    @Override
    public stops updateStop(Long id, stops stop) {

        stops existingStop = stopsRepository.findById(id).orElse(null);

        if (existingStop != null) {

            existingStop.setRouteId(stop.getRouteId());
            existingStop.setStopName(stop.getStopName());
            existingStop.setLatitude(stop.getLatitude());
            existingStop.setLongitude(stop.getLongitude());
            existingStop.setSequence(stop.getSequence());
            existingStop.setIsMajorStop(stop.getIsMajorStop());

            return stopsRepository.save(existingStop);
        }

        return null;
    }

    @Override
    public void deleteStop(Long id) {
        stopsRepository.deleteById(id);
    }

}