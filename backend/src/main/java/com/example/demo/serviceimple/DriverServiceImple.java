package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Driver;
import com.example.demo.repository.DriverRepository;
import com.example.demo.service.DriverService;

@Service
public class DriverServiceImple implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Override
    public Driver saveDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    @Override
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @Override
    public Optional<Driver> getDriverById(Long id) {
        return driverRepository.findById(id);
    }

    @Override
    public Driver updateDriver(Long id, Driver driver) {

        Driver existingDriver = driverRepository.findById(id).orElse(null);

        if (existingDriver != null) {

            existingDriver.setName(driver.getName());
            existingDriver.setPhone(driver.getPhone());
            existingDriver.setLicense(driver.getLicense());
            existingDriver.setStatus(driver.getStatus());

            return driverRepository.save(existingDriver);
        }

        return null;
    }

    @Override
    public void deleteDriver(Long id) {
        driverRepository.deleteById(id);
    }

}