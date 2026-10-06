package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.student;
import com.example.demo.dto.BusDetailsDTO;
import com.example.demo.dto.StudentChangePasswordDTO;
import com.example.demo.dto.RouteDetailsDTO;
import com.example.demo.dto.AttendanceDTO;
import com.example.demo.dto.NotificationDTO;
import com.example.demo.dto.ComplaintDTO;
import com.example.demo.models.Complaint;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface StudentService {

	student saveStudent(student student);

	List<student> getAllStudents();

	Optional<student> getStudentById(Long id);

	student updateStudent(Long id, student student);

	void deleteStudent(Long id);

	// Login
	student login(String email, String password);

	BusDetailsDTO getBusDetails(Long studentId);

	RouteDetailsDTO getRouteDetails(Long studentId);

	List<AttendanceDTO> getAttendance(Long studentId);

	List<NotificationDTO> getNotifications(Long studentId);

	List<ComplaintDTO> getStudentComplaints(Long studentId);

	Complaint saveComplaint(Complaint complaint);

	boolean changePassword(StudentChangePasswordDTO dto);

	String uploadPhoto(Long studentId, MultipartFile file) throws IOException;

	void sendOtp(String email);

	boolean verifyOtp(String email, String otp);

	boolean resetPassword(String email, String newPassword);

}