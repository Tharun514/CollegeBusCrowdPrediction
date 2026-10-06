package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.RealTimeTracking;

@Repository
public interface RealTimeTrackingRepository extends JpaRepository<RealTimeTracking, Long> {

	Optional<RealTimeTracking> findTopByBusIdOrderByTrackingTimeDesc(Long busId);

}