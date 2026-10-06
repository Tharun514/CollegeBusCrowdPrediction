package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.BusLocation;
import com.example.demo.repository.BusLocationRepository;
import com.example.demo.service.BusLocationService;

@Service
public class BusLocationServiceImple implements BusLocationService {

    @Autowired
    private BusLocationRepository busLocationRepository;

    @Override
    public BusLocation saveBusLocation(BusLocation busLocation) {
        return busLocationRepository.save(busLocation);
    }

    @Override
    public List<BusLocation> getAllBusLocations() {
        return busLocationRepository.findAll();
    }

    @Override
    public Optional<BusLocation> getBusLocationById(Long id) {
        return busLocationRepository.findById(id);
    }

    @Override
    public BusLocation updateBusLocation(Long id, BusLocation busLocation) {

        BusLocation existingBusLocation = busLocationRepository.findById(id).orElse(null);

        if (existingBusLocation != null) {

            existingBusLocation.setBusId(busLocation.getBusId());
            existingBusLocation.setLatitude(busLocation.getLatitude());
            existingBusLocation.setLongitude(busLocation.getLongitude());
            existingBusLocation.setSpeed(busLocation.getSpeed());
            existingBusLocation.setHeading(busLocation.getHeading());
            existingBusLocation.setAccuracy(busLocation.getAccuracy());
            existingBusLocation.setTimestamp(busLocation.getTimestamp());

            return busLocationRepository.save(existingBusLocation);
        }

        return null;
    }

    @Override
    public void deleteBusLocation(Long id) {
        busLocationRepository.deleteById(id);
    }

}