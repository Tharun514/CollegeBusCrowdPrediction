package com.example.demo.dto;

public class RouteDetailsDTO {

	private String routeName;
	private String startLocation;
	private String endLocation;
	private Double distanceKm;

	public RouteDetailsDTO() {
	}

	public RouteDetailsDTO(String routeName, String startLocation, String endLocation, Double distanceKm) {
		this.routeName = routeName;
		this.startLocation = startLocation;
		this.endLocation = endLocation;
		this.distanceKm = distanceKm;
	}

	public String getRouteName() {
		return routeName;
	}

	public void setRouteName(String routeName) {
		this.routeName = routeName;
	}

	public String getStartLocation() {
		return startLocation;
	}

	public void setStartLocation(String startLocation) {
		this.startLocation = startLocation;
	}

	public String getEndLocation() {
		return endLocation;
	}

	public void setEndLocation(String endLocation) {
		this.endLocation = endLocation;
	}

	public Double getDistanceKm() {
		return distanceKm;
	}

	public void setDistanceKm(Double distanceKm) {
		this.distanceKm = distanceKm;
	}
}