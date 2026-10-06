package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.StudentBusAssignment;
import com.example.demo.service.StudentBusAssignmentService;

@RestController
@RequestMapping("/studentbusassignment")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentBusAssignmentController {

	@Autowired
	private StudentBusAssignmentService studentBusAssignmentService;

	// Save Student Bus Assignment
	@PostMapping("/save")
	public StudentBusAssignment saveStudentBusAssignment(@RequestBody StudentBusAssignment studentBusAssignment) {

		System.out.println("========== ASSIGNMENT RECEIVED ==========");
		System.out.println(studentBusAssignment);
		System.out.println("Route ID = " + studentBusAssignment.getRouteId());

		return studentBusAssignmentService.saveStudentBusAssignment(studentBusAssignment);
	}

	// Get All Student Bus Assignments
	@GetMapping("/getall")
	public List<StudentBusAssignment> getAllStudentBusAssignments() {

		return studentBusAssignmentService.getAllStudentBusAssignments();
	}

	// Get Student Bus Assignment By Id
	@GetMapping("/get/{id}")
	public Optional<StudentBusAssignment> getStudentBusAssignmentById(@PathVariable Long id) {

		return studentBusAssignmentService.getStudentBusAssignmentById(id);
	}

	// Update Student Bus Assignment
	@PutMapping("/update/{id}")
	public StudentBusAssignment updateStudentBusAssignment(@PathVariable Long id,
			@RequestBody StudentBusAssignment studentBusAssignment) {

		return studentBusAssignmentService.updateStudentBusAssignment(id, studentBusAssignment);
	}

	// Delete Student Bus Assignment
	@DeleteMapping("/delete/{id}")
	public String deleteStudentBusAssignment(@PathVariable Long id) {

		studentBusAssignmentService.deleteStudentBusAssignment(id);
		return "Student Bus Assignment Deleted Successfully";
	}

	@GetMapping("/student/{studentId}")
	public Optional<StudentBusAssignment> getAssignmentByStudentId(@PathVariable Long studentId) {

		return studentBusAssignmentService.getAssignmentByStudentId(studentId);

	}

}