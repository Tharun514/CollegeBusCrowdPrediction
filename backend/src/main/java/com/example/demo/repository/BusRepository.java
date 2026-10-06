package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Bus;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {

	Optional<Bus> findByBusNo(String busNo);

}