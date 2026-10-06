package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.StudentBusAssignment;

@Repository
public interface StudentBusAssignmentRepository extends JpaRepository<StudentBusAssignment, Long> {

	Optional<StudentBusAssignment> findTopByStudentIdOrderByAssignmentIdDesc(Long studentId);
} 