package com.example.demo.dto;

public class BusDetailsDTO {

	private String busNo;
	private String registrationNumber;
	private Integer capacity;
	private String status;
	private String currentStop;
	private String nextStop;

	public BusDetailsDTO() {
	}

	public BusDetailsDTO(String busNo, String registrationNumber, Integer capacity, String status, String currentStop,
			String nextStop) {

		this.busNo = busNo;
		this.registrationNumber = registrationNumber;
		this.capacity = capacity;
		this.status = status;
		this.currentStop = currentStop;
		this.nextStop = nextStop;
	}

	public String getBusNo() {
		return busNo;
	}

	public void setBusNo(String busNo) {
		this.busNo = busNo;
	}

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCurrentStop() {
		return currentStop;
	}

	public void setCurrentStop(String currentStop) {
		this.currentStop = currentStop;
	}

	public String getNextStop() {
		return nextStop;
	}

	public void setNextStop(String nextStop) {
		this.nextStop = nextStop;
	}

}