package com.example.demo.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "student_id")
	private Long studentId;

	@Column(nullable = false)
	private String name;

	@Column(name = "roll_no", nullable = false, unique = true)
	private String rollNo;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(nullable = false)
	private String password;

	private String department;

	private Integer year;

	@Column(name = "bus_pass_number")
	private String busPassNumber;

	@Column(name = "route_id")
	private Long routeId;

	@Column(name = "bus_id")
	private Long busId;

	@Column(name = "photo_url")
	private String photoUrl;

	@Column(name = "otp")
	private String otp;

	@Column(name = "otp_expiry")
	private LocalDateTime otpExpiry;

	@Column(name = "created_at")
	private LocalDateTime createdAt;

	@Column(name = "updated_at")
	private LocalDateTime updatedAt;

	// Default Constructor
	public student() {
	}

	// Parameterized Constructor
	public student(Long studentId, String name, String rollNo, String email, String password, String department,
			Integer year, String busPassNumber, Long routeId, Long busId, String photoUrl, String otp,
			LocalDateTime otpExpiry, LocalDateTime createdAt, LocalDateTime updatedAt) {

		this.studentId = studentId;
		this.name = name;
		this.rollNo = rollNo;
		this.email = email;
		this.password = password;
		this.department = department;
		this.year = year;
		this.busPassNumber = busPassNumber;
		this.routeId = routeId;
		this.busId = busId;
		this.photoUrl = photoUrl;
		this.otp = otp;
		this.otpExpiry = otpExpiry;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRollNo() {
		return rollNo;
	}

	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getBusPassNumber() {
		return busPassNumber;
	}

	public void setBusPassNumber(String busPassNumber) {
		this.busPassNumber = busPassNumber;
	}

	public Long getRouteId() {
		return routeId;
	}

	public void setRouteId(Long routeId) {
		this.routeId = routeId;
	}

	public Long getBusId() {
		return busId;
	}

	public void setBusId(Long busId) {
		this.busId = busId;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public LocalDateTime getOtpExpiry() {
		return otpExpiry;
	}

	public void setOtpExpiry(LocalDateTime otpExpiry) {
		this.otpExpiry = otpExpiry;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Override
	public String toString() {
		return "student{" + "studentId=" + studentId + ", name='" + name + '\'' + ", rollNo='" + rollNo + '\''
				+ ", email='" + email + '\'' + ", password='" + password + '\'' + ", department='" + department + '\''
				+ ", year=" + year + ", busPassNumber='" + busPassNumber + '\'' + ", routeId=" + routeId + ", busId="
				+ busId + ", photoUrl='" + photoUrl + '\'' + ", otp='" + otp + '\'' + ", otpExpiry=" + otpExpiry
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + '}';
	}
}