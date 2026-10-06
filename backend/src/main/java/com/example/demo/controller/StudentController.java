package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Complaint;
import com.example.demo.models.student;
import com.example.demo.service.StudentService;
import com.example.demo.dto.BusDetailsDTO;
import com.example.demo.dto.ComplaintDTO;
import com.example.demo.dto.RouteDetailsDTO;
import com.example.demo.dto.AttendanceDTO;
import com.example.demo.dto.NotificationDTO;
import com.example.demo.dto.StudentChangePasswordDTO;
import org.springframework.http.ResponseEntity;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;
import com.example.demo.dto.ForgotPasswordDTO;
import com.example.demo.dto.VerifyOtpDTO;
import com.example.demo.dto.ResetPasswordDTO;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

	@Autowired
	private StudentService studentService;

	// Save Student
	@PostMapping("/signup/save")
	public student saveStudent(@RequestBody student student) {
		return studentService.saveStudent(student);
	}

	// Get All Students
	@GetMapping("/getall")
	public List<student> getAllStudents() {
		return studentService.getAllStudents();
	}

	// Get Student By Id
	@GetMapping("/get/{id}")
	public Optional<student> getStudentById(@PathVariable Long id) {
		return studentService.getStudentById(id);
	}

	// Update Student
	@PutMapping("/update/{id}")
	public student updateStudent(@PathVariable Long id, @RequestBody student student) {
		return studentService.updateStudent(id, student);
	}

	// Delete Student
	@DeleteMapping("/delete/{id}")
	public String deleteStudent(@PathVariable Long id) {
		studentService.deleteStudent(id);
		return "Student Deleted Successfully";
	}

	// Student Login

	@PostMapping("/login")
	public student login(@RequestBody Map<String, String> loginData) {

		String email = loginData.get("email");
		String password = loginData.get("password");

		System.out.println("Entered Email : " + email);
		System.out.println("Entered Password : " + password);

		student s = studentService.login(email, password);

		System.out.println("Student Found : " + s);

		return s;
	}

	@GetMapping("/profile/{id}")
	public student getStudentProfile(@PathVariable Long id) {

		return studentService.getStudentById(id).orElse(null);

	}

	@GetMapping("/bus/{studentId}")
	public BusDetailsDTO getBusDetails(@PathVariable Long studentId) {

		return studentService.getBusDetails(studentId);

	}

	@GetMapping("/route/{studentId}")
	public RouteDetailsDTO getRouteDetails(@PathVariable Long studentId) {

		return studentService.getRouteDetails(studentId);

	}

	@GetMapping("/attendance/{studentId}")
	public List<AttendanceDTO> getAttendance(@PathVariable Long studentId) {

		return studentService.getAttendance(studentId);

	}

	@GetMapping("/notifications/{studentId}")
	public List<NotificationDTO> getNotifications(@PathVariable Long studentId) {

		return studentService.getNotifications(studentId);

	}

	@GetMapping("/complaints/{studentId}")
	public List<ComplaintDTO> getStudentComplaints(@PathVariable Long studentId) {

		return studentService.getStudentComplaints(studentId);

	}

	@PostMapping("/complaints")
	public Complaint saveComplaint(@RequestBody Complaint complaint) {

		return studentService.saveComplaint(complaint);

	}

	@PostMapping("/change-password")
	public ResponseEntity<String> changePassword(@RequestBody StudentChangePasswordDTO dto) {

		boolean changed = studentService.changePassword(dto);

		if (changed) {
			return ResponseEntity.ok("Password Changed Successfully");
		} else {
			return ResponseEntity.badRequest().body("Current Password is Incorrect");
		}
	}

	@PostMapping("/upload-photo/{id}")
	public ResponseEntity<String> uploadPhoto(@PathVariable Long id, @RequestParam("file") MultipartFile file) {

		try {
			String fileName = studentService.uploadPhoto(id, file);
			return ResponseEntity.ok(fileName);
		} catch (IOException e) {
			return ResponseEntity.badRequest().body("Upload Failed");
		}
	}

	@PostMapping("/send-otp")
	public ResponseEntity<String> sendOtp(@RequestBody ForgotPasswordDTO dto) {

		studentService.sendOtp(dto.getEmail());

		return ResponseEntity.ok("OTP Sent Successfully");
	}

	@PostMapping("/verify-otp")
	public ResponseEntity<String> verifyOtp(@RequestBody VerifyOtpDTO dto) {

		boolean verified = studentService.verifyOtp(dto.getEmail(), dto.getOtp());

		if (verified) {
			return ResponseEntity.ok("OTP Verified");
		} else {
			return ResponseEntity.badRequest().body("Invalid or Expired OTP");
		}
	}

	@PostMapping("/reset-password")
	public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordDTO dto) {

		boolean reset = studentService.resetPassword(dto.getEmail(), dto.getNewPassword());

		if (reset) {
			return ResponseEntity.ok("Password Reset Successfully");
		} else {
			return ResponseEntity.badRequest().body("Password Reset Failed");
		}
	}

}