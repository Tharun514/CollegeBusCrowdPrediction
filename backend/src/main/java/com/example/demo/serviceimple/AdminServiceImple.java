package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.service.AdminService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.web.multipart.MultipartFile;

@Service
public class AdminServiceImple implements AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private EmailService emailService;

	@Override
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}

	@Override
	public Optional<Admin> getAdminById(Long id) {
		return adminRepository.findById(id);
	}

	@Override
	public Admin updateAdmin(Long id, Admin admin) {

		Admin existingAdmin = adminRepository.findById(id).orElse(null);

		if (existingAdmin == null) {
			return null;
		}

		existingAdmin.setUsername(admin.getUsername());
		existingAdmin.setEmail(admin.getEmail());
		existingAdmin.setFullName(admin.getFullName());
		existingAdmin.setRole(admin.getRole());

		return adminRepository.save(existingAdmin);
	}

	@Override
	public void deleteAdmin(Long id) {
		adminRepository.deleteById(id);
	}

	@Override
	public Admin login(String usernameOrEmail, String password) {

		Optional<Admin> admin = adminRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);

		if (admin.isPresent()) {

			Admin dbAdmin = admin.get();

			if (dbAdmin.getPassword().equals(password)) {
				return dbAdmin;
			}

		}

		return null;
	}

	@Override
	public String uploadPhoto(Long adminId, MultipartFile file) throws IOException {

		Admin admin = adminRepository.findById(adminId).orElse(null);

		if (admin == null) {
			return "Admin Not Found";
		}

		String uploadDir = "uploads/";

		Files.createDirectories(Paths.get(uploadDir));

		String fileName = "admin_" + adminId + "_" + file.getOriginalFilename();

		Path filePath = Paths.get(uploadDir, fileName);

		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

		admin.setPhotoUrl(fileName);

		adminRepository.save(admin);

		return fileName;
	}

	@Override
	public boolean changePassword(Long adminId, String currentPassword, String newPassword) {

		Admin admin = adminRepository.findById(adminId).orElse(null);

		if (admin == null) {
			return false;
		}

		if (!admin.getPassword().equals(currentPassword)) {
			return false;
		}

		admin.setPassword(newPassword);

		adminRepository.save(admin);

		return true;
	}

	@Override
	public void sendOtp(String email) {

		Admin admin = adminRepository.findByEmail(email).orElse(null);

		if (admin == null) {
			throw new RuntimeException("Email not found");
		}

		String otp = String.format("%06d", new Random().nextInt(999999));

		admin.setOtp(otp);
		admin.setOtpExpiry(LocalDateTime.now().plusMinutes(5));

		adminRepository.save(admin);

		emailService.sendOtpEmail(email, otp);
	}

	@Override
	public boolean verifyOtp(String email, String otp) {

		Admin admin = adminRepository.findByEmail(email).orElse(null);

		if (admin == null)
			return false;

		if (admin.getOtp() == null)
			return false;

		if (!admin.getOtp().equals(otp))
			return false;

		if (admin.getOtpExpiry().isBefore(LocalDateTime.now()))
			return false;

		return true;
	}

	@Override
	public boolean resetPassword(String email, String newPassword) {

		Admin admin = adminRepository.findByEmail(email).orElse(null);

		if (admin == null)
			return false;

		admin.setPassword(newPassword);
		admin.setOtp(null);
		admin.setOtpExpiry(null);

		adminRepository.save(admin);

		return true;
	}

}