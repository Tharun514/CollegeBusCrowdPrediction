package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.student;

@Repository
public interface StudentRepository extends JpaRepository<student, Long> {

	Optional<student> findByEmail(String email);

}