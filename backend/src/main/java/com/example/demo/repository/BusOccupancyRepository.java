package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.BusOccupancy;

@Repository
public interface BusOccupancyRepository extends JpaRepository<BusOccupancy, Long> {

	Optional<BusOccupancy> findByBusId(Long busId);

}