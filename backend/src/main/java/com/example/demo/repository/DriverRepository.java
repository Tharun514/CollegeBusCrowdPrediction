package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {

}