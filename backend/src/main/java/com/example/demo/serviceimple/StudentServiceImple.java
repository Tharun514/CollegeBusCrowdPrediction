package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AttendanceDTO;
import com.example.demo.dto.BusDetailsDTO;
import com.example.demo.dto.StudentChangePasswordDTO;
import com.example.demo.dto.ComplaintDTO;
import com.example.demo.dto.NotificationDTO;
import com.example.demo.dto.RouteDetailsDTO;
import com.example.demo.models.Attendance;
import com.example.demo.models.Bus;
import com.example.demo.models.Complaint;
import com.example.demo.models.Notification;
import com.example.demo.models.Route;
import com.example.demo.models.StudentBusAssignment;
import com.example.demo.models.student;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.NotificationRepository;
import com.example.demo.repository.RouteRepository;
import com.example.demo.repository.StudentBusAssignmentRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.web.multipart.MultipartFile;
import java.time.LocalDateTime;
import java.util.Random;

@Service
public class StudentServiceImple implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private BusRepository busRepository;

	@Autowired
	private RouteRepository routeRepository;

	@Autowired
	private AttendanceRepository attendanceRepository;

	@Autowired
	private NotificationRepository notificationRepository;

	@Autowired
	private ComplaintRepository complaintRepository;

	@Autowired
	private StudentBusAssignmentRepository studentBusAssignmentRepository;

	@Autowired
	private EmailService emailService;

	@Override
	public student saveStudent(student student) {
		return studentRepository.save(student);
	}

	@Override
	public List<student> getAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	public Optional<student> getStudentById(Long id) {
		return studentRepository.findById(id);
	}

	@Override
	public student updateStudent(Long id, student student) {

		student existingStudent = studentRepository.findById(id).orElse(null);

		if (existingStudent != null) {

			existingStudent.setName(student.getName());
			existingStudent.setRollNo(student.getRollNo());
			existingStudent.setEmail(student.getEmail());
			existingStudent.setPassword(student.getPassword());
			existingStudent.setDepartment(student.getDepartment());
			existingStudent.setYear(student.getYear());
			existingStudent.setBusPassNumber(student.getBusPassNumber());
			existingStudent.setRouteId(student.getRouteId());
			existingStudent.setBusId(student.getBusId());
			existingStudent.setPhotoUrl(student.getPhotoUrl());

			return studentRepository.save(existingStudent);
		}

		return null;
	}

	@Override
	public void deleteStudent(Long id) {
		studentRepository.deleteById(id);
	}

	// Student Login
	@Override
	public student login(String email, String password) {

		Optional<student> optionalStudent = studentRepository.findByEmail(email);

		if (optionalStudent.isPresent()) {

			student student = optionalStudent.get();

			if (student.getPassword().equals(password)) {
				return student;
			}
		}

		return null;
	}

	// ========================= MY BUS =========================

	@Override
	public BusDetailsDTO getBusDetails(Long studentId) {

		StudentBusAssignment assignment = studentBusAssignmentRepository
				.findTopByStudentIdOrderByAssignmentIdDesc(studentId).orElse(null);

		if (assignment == null) {
			return null;
		}

		Bus bus = busRepository.findById(assignment.getBusId()).orElse(null);

		if (bus == null) {
			return null;
		}

		return new BusDetailsDTO(bus.getBusNo(), bus.getRegistrationNumber(), bus.getCapacity(),
				bus.getStatus().toString(), bus.getCurrentStop(), bus.getNextStop());
	}

	// ========================= MY ROUTE =========================

	@Override
	public RouteDetailsDTO getRouteDetails(Long studentId) {

		StudentBusAssignment assignment = studentBusAssignmentRepository
				.findTopByStudentIdOrderByAssignmentIdDesc(studentId).orElse(null);

		if (assignment == null) {
			return null;
		}

		Route route = routeRepository.findById(assignment.getRouteId()).orElse(null);

		if (route == null) {
			return null;
		}

		return new RouteDetailsDTO(route.getRouteName(), route.getStartPoint(), route.getEndPoint(),
				route.getDistance().doubleValue());
	}

	@Override
	public List<AttendanceDTO> getAttendance(Long studentId) {

		List<Attendance> attendanceList = attendanceRepository.findByStudentIdOrderByScanTimeDesc(studentId);

		return attendanceList.stream().map(a -> new AttendanceDTO(a.getScanTime(), a.getScanType().toString()))
				.collect(Collectors.toList());
	}

	@Override
	public List<NotificationDTO> getNotifications(Long studentId) {

		List<Notification> notifications = notificationRepository.findByStudentIdOrderByCreatedAtDesc(studentId);

		return notifications.stream().map(n -> new NotificationDTO(n.getTitle(), n.getMessage(), n.getType().toString(),
				n.getIsRead(), n.getCreatedAt())).collect(Collectors.toList());
	}

	@Override
	public List<ComplaintDTO> getStudentComplaints(Long studentId) {

		return complaintRepository
				.findByStudentIdOrderByCreatedAtDesc(studentId).stream().map(c -> new ComplaintDTO(c.getComplaintId(),
						c.getTitle(), c.getDescription(), c.getStatus().toString(), c.getCreatedAt()))
				.collect(Collectors.toList());
	}

	@Override
	public Complaint saveComplaint(Complaint complaint) {

		complaint.setCreatedAt(java.time.LocalDateTime.now());

		return complaintRepository.save(complaint);
	}

	@Override
	public boolean changePassword(StudentChangePasswordDTO dto) {
		student s = studentRepository.findById(dto.getStudentId()).orElse(null);

		if (s == null) {
			return false;
		}

		if (!s.getPassword().equals(dto.getCurrentPassword())) {
			return false;
		}

		s.setPassword(dto.getNewPassword());

		studentRepository.save(s);

		return true;
	}

	@Override
	public String uploadPhoto(Long studentId, MultipartFile file) throws IOException {

		student s = studentRepository.findById(studentId).orElse(null);

		if (s == null) {
			return "Student Not Found";
		}

		String uploadDir = "uploads/";

		Files.createDirectories(Paths.get(uploadDir));

		String fileName = studentId + "_" + file.getOriginalFilename();

		Path filePath = Paths.get(uploadDir, fileName);

		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

		s.setPhotoUrl(fileName);

		studentRepository.save(s);

		return fileName;
	}

	@Override
	public void sendOtp(String email) {

		student s = studentRepository.findByEmail(email).orElse(null);

		if (s == null) {
			throw new RuntimeException("Email not found");
		}

		String otp = String.format("%06d", new Random().nextInt(999999));

		s.setOtp(otp);
		s.setOtpExpiry(LocalDateTime.now().plusMinutes(5));

		studentRepository.save(s);

		emailService.sendOtpEmail(email, otp);
	}

	@Override
	public boolean verifyOtp(String email, String otp) {

		student s = studentRepository.findByEmail(email).orElse(null);

		if (s == null) {
			return false;
		}

		if (s.getOtp() == null) {
			return false;
		}

		if (!s.getOtp().equals(otp)) {
			return false;
		}

		if (s.getOtpExpiry().isBefore(LocalDateTime.now())) {
			return false;
		}

		return true;
	}

	@Override
	public boolean resetPassword(String email, String newPassword) {

		student s = studentRepository.findByEmail(email).orElse(null);

		if (s == null) {
			return false;
		}

		s.setPassword(newPassword);
		s.setOtp(null);
		s.setOtpExpiry(null);

		studentRepository.save(s);

		return true;
	}
}