package com.example.demo.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.demo.dto.DashboardDTO;
import com.example.demo.dto.adminChangePasswordDTO;
import com.example.demo.dto.ForgotPasswordDTO;
import com.example.demo.dto.VerifyOtpDTO;
import com.example.demo.dto.ResetPasswordDTO;
import com.example.demo.models.Admin;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.DriverRepository;
import com.example.demo.repository.RouteRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private DriverRepository driverRepository;

	@Autowired
	private BusRepository busRepository;

	@Autowired
	private RouteRepository routeRepository;

	@Autowired
	private AttendanceRepository attendanceRepository;

	@Autowired
	private ComplaintRepository complaintRepository;

	// Save Admin
	@PostMapping("/signup/save")
	public Admin saveAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}

	// Login
	@PostMapping("/login")
	public Admin login(@RequestBody Admin admin) {
		return adminService.login(admin.getUsername(), admin.getPassword());
	}

	// Get All Admins
	@GetMapping("/getall")
	public List<Admin> getAllAdmins() {
		return adminService.getAllAdmins();
	}

	// Get Admin By Id
	@GetMapping("/get/{id}")
	public Optional<Admin> getAdminById(@PathVariable Long id) {
		return adminService.getAdminById(id);
	}

	// Update Admin Profile
	@PutMapping("/update/{id}")
	public Admin updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
		return adminService.updateAdmin(id, admin);
	}

	// Upload Profile Photo
	@PostMapping("/upload-photo/{id}")
	public String uploadPhoto(@PathVariable Long id, @RequestParam("file") MultipartFile file) throws IOException {

		return adminService.uploadPhoto(id, file);
	}

	// Change Password
	@PostMapping("/change-password/{id}")
	public String changePassword(@PathVariable Long id, @RequestBody adminChangePasswordDTO request) {

		boolean status = adminService.changePassword(id, request.getCurrentPassword(), request.getNewPassword());

		return status ? "Password Changed Successfully" : "Current Password Incorrect";
	}

	// Send OTP
	@PostMapping("/forgot-password/send-otp")
	public String sendOtp(@RequestBody ForgotPasswordDTO request) {

		adminService.sendOtp(request.getEmail());

		return "OTP Sent Successfully";
	}

	// Verify OTP
	@PostMapping("/forgot-password/verify-otp")
	public String verifyOtp(@RequestBody VerifyOtpDTO request) {

		boolean status = adminService.verifyOtp(request.getEmail(), request.getOtp());

		return status ? "OTP Verified" : "Invalid OTP";
	}

	// Reset Password
	@PostMapping("/forgot-password/reset-password")
	public String resetPassword(@RequestBody ResetPasswordDTO request) {

		boolean status = adminService.resetPassword(request.getEmail(), request.getNewPassword());

		return status ? "Password Reset Successfully" : "Password Reset Failed";
	}

	// Delete Admin
	@DeleteMapping("/delete/{id}")
	public String deleteAdmin(@PathVariable Long id) {

		adminService.deleteAdmin(id);

		return "Admin Deleted Successfully";
	}

	// Dashboard
	@GetMapping("/dashboard")
	public DashboardDTO getDashboard() {

		DashboardDTO dashboard = new DashboardDTO();

		dashboard.setTotalStudents(studentRepository.count());
		dashboard.setTotalDrivers(driverRepository.count());
		dashboard.setTotalBuses(busRepository.count());
		dashboard.setTotalRoutes(routeRepository.count());
		dashboard.setTotalAttendance(attendanceRepository.count());
		dashboard.setTotalComplaints(complaintRepository.count());

		return dashboard;
	}
}