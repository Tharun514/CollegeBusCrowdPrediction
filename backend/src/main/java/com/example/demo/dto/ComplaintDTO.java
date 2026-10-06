package com.example.demo.dto;

import java.time.LocalDateTime;

public class ComplaintDTO {

	private Long complaintId;
	private String title;
	private String description;
	private String status;
	private LocalDateTime createdAt;

	public ComplaintDTO() {
	}

	public ComplaintDTO(Long complaintId, String title, String description, String status, LocalDateTime createdAt) {
		this.complaintId = complaintId;
		this.title = title;
		this.description = description;
		this.status = status;
		this.createdAt = createdAt;
	}

	public Long getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}