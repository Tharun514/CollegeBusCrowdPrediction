package com.example.demo.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.Admin;

public interface AdminService {

	Admin saveAdmin(Admin admin);

	List<Admin> getAllAdmins();

	Optional<Admin> getAdminById(Long id);

	Admin updateAdmin(Long id, Admin admin);

	void deleteAdmin(Long id);

	Admin login(String username, String password);

	String uploadPhoto(Long adminId, MultipartFile file) throws IOException;

	boolean changePassword(Long adminId, String currentPassword, String newPassword);

	void sendOtp(String email);

	boolean verifyOtp(String email, String otp);

	boolean resetPassword(String email, String newPassword);

}