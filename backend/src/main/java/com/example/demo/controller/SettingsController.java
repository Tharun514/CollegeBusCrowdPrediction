package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.Settings;
import com.example.demo.service.SettingsService;

@RestController
@RequestMapping("/settings")
@CrossOrigin(origins = "http://localhost:4200")
public class SettingsController {

	@Autowired
	private SettingsService settingsService;

	@PostMapping("/save")
	public Settings saveSettings(@RequestBody Settings settings) {
		return settingsService.save(settings);
	}

	@GetMapping("/get")
	public Settings getSettings() {
		return settingsService.getSettings();
	}

	@PostMapping("/upload-logo")
	public ResponseEntity<?> uploadLogo(@RequestParam("file") MultipartFile file) {

		try {

			String uploadDir = System.getProperty("user.dir") + "/uploads/";

			File directory = new File(uploadDir);

			if (!directory.exists()) {
				directory.mkdirs();
			}

			String fileName = UUID.randomUUID() + "_" + StringUtils.cleanPath(file.getOriginalFilename());

			Files.copy(file.getInputStream(), Paths.get(uploadDir + fileName));

			Settings settings = settingsService.getSettings();

			settings.setLogoUrl("/uploads/" + fileName);

			settingsService.save(settings);

			return ResponseEntity.ok(settings);

		} catch (IOException e) {

			return ResponseEntity.badRequest().body("Upload Failed");

		}

	}

	@PostMapping("/save-theme")
	public Settings saveTheme(@RequestBody Map<String, String> request) {

		Settings settings = settingsService.getSettings();

		settings.setTheme(request.get("theme"));

		return settingsService.save(settings);

	}

}