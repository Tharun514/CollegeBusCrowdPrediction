package com.example.demo.dto;

public class VerifyOtpDTO {

	private String email;
	private String otp;

	public VerifyOtpDTO() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
}