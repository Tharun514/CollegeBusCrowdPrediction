package com.example.demo.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "admin_id")
	private Long adminId;

	@Column(nullable = false, unique = true)
	private String username;

	@Column(nullable = false)
	private String password;

	@Column(nullable = false, unique = true)
	private String email;

	@Enumerated(EnumType.STRING)
	private AdminRole role = AdminRole.BUS_INCHARGE;

	@Column(name = "full_name")
	private String fullName;

	@Column(name = "photo_url")
	private String photoUrl;

	@Column(name = "otp")
	private String otp;

	@Column(name = "otp_expiry")
	private LocalDateTime otpExpiry;

	@Column(name = "created_at")
	private LocalDateTime createdAt;

	public Admin() {
	}

	public Admin(Long adminId, String username, String password, String email, AdminRole role, String fullName,
			String photoUrl, String otp, LocalDateTime otpExpiry, LocalDateTime createdAt) {

		this.adminId = adminId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.fullName = fullName;
		this.photoUrl = photoUrl;
		this.otp = otp;
		this.otpExpiry = otpExpiry;
		this.createdAt = createdAt;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public AdminRole getRole() {
		return role;
	}

	public void setRole(AdminRole role) {
		this.role = role;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
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

	@Override
	public String toString() {
		return "Admin{" + "adminId=" + adminId + ", username='" + username + '\'' + ", password='" + password + '\''
				+ ", email='" + email + '\'' + ", role=" + role + ", fullName='" + fullName + '\'' + ", photoUrl='"
				+ photoUrl + '\'' + ", otp='" + otp + '\'' + ", otpExpiry=" + otpExpiry + ", createdAt=" + createdAt
				+ '}';
	}

	public enum AdminRole {
		SUPER_ADMIN, BUS_INCHARGE
	}
}