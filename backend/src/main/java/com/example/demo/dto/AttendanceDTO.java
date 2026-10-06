package com.example.demo.dto;

import java.time.LocalDateTime;

public class AttendanceDTO {

	private LocalDateTime scanTime;
	private String scanType;

	public AttendanceDTO() {
	}

	public AttendanceDTO(LocalDateTime scanTime, String scanType) {
		this.scanTime = scanTime;
		this.scanType = scanType;
	}

	public LocalDateTime getScanTime() {
		return scanTime;
	}

	public void setScanTime(LocalDateTime scanTime) {
		this.scanTime = scanTime;
	}

	public String getScanType() {
		return scanType;
	}

	public void setScanType(String scanType) {
		this.scanType = scanType;
	}

}