package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Driver;

public interface DriverService {

    Driver saveDriver(Driver driver);

    List<Driver> getAllDrivers();

    Optional<Driver> getDriverById(Long id);

    Driver updateDriver(Long id, Driver driver);

    void deleteDriver(Long id);

}