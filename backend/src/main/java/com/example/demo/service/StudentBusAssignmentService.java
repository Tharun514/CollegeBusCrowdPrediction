package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.StudentBusAssignment;

public interface StudentBusAssignmentService {

	StudentBusAssignment saveStudentBusAssignment(StudentBusAssignment studentBusAssignment);

	List<StudentBusAssignment> getAllStudentBusAssignments();

	Optional<StudentBusAssignment> getStudentBusAssignmentById(Long id);

	Optional<StudentBusAssignment> getAssignmentByStudentId(Long studentId);

	StudentBusAssignment updateStudentBusAssignment(Long id, StudentBusAssignment studentBusAssignment);

	void deleteStudentBusAssignment(Long id);

}