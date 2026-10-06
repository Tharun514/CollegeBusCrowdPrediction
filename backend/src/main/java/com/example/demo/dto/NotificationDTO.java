package com.example.demo.dto;

import java.time.LocalDateTime;

public class NotificationDTO {

	private String title;
	private String message;
	private String type;
	private Boolean isRead;
	private LocalDateTime createdAt;

	public NotificationDTO() {
	}

	public NotificationDTO(String title, String message, String type, Boolean isRead, LocalDateTime createdAt) {
		this.title = title;
		this.message = message;
		this.type = type;
		this.isRead = isRead;
		this.createdAt = createdAt;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Boolean getIsRead() {
		return isRead;
	}

	public void setIsRead(Boolean isRead) {
		this.isRead = isRead;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

}