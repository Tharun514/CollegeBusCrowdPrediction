package com.example.demo.dto;

public class adminChangePasswordDTO {

	private String currentPassword;
	private String newPassword;

	public adminChangePasswordDTO() {
	}

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

}