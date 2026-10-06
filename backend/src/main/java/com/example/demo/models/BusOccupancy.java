package com.example.demo.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bus_occupancy")
public class BusOccupancy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "bus_id", nullable = false)
	private Long busId;

	private Integer occupied = 0;

	private Integer available = 50;

	@Column(name = "occupancy_percentage")
	private BigDecimal occupancyPercentage;

	@Enumerated(EnumType.STRING)
	@Column(name = "crowd_level")
	private CrowdLevel crowdLevel;

	@Column(name = "updated_time")
	private LocalDateTime updatedTime;

	// Default Constructor
	public BusOccupancy() {
	}

	// Parameterized Constructor
	public BusOccupancy(Long id, Long busId, Integer occupied, Integer available, BigDecimal occupancyPercentage,
			CrowdLevel crowdLevel, LocalDateTime updatedTime) {

		this.id = id;
		this.busId = busId;
		this.occupied = occupied;
		this.available = available;
		this.occupancyPercentage = occupancyPercentage;
		this.crowdLevel = crowdLevel;
		this.updatedTime = updatedTime;
	}

	// Getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getBusId() {
		return busId;
	}

	public void setBusId(Long busId) {
		this.busId = busId;
	}

	public Integer getOccupied() {
		return occupied;
	}

	public void setOccupied(Integer occupied) {
		this.occupied = occupied;
	}

	public Integer getAvailable() {
		return available;
	}

	public void setAvailable(Integer available) {
		this.available = available;
	}

	public BigDecimal getOccupancyPercentage() {
		return occupancyPercentage;
	}

	public void setOccupancyPercentage(BigDecimal occupancyPercentage) {
		this.occupancyPercentage = occupancyPercentage;
	}

	public CrowdLevel getCrowdLevel() {
		return crowdLevel;
	}

	public void setCrowdLevel(CrowdLevel crowdLevel) {
		this.crowdLevel = crowdLevel;
	}

	public LocalDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(LocalDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}

	@Override
	public String toString() {
		return "Bus_Occupancy{" + "id=" + id + ", busId=" + busId + ", occupied=" + occupied + ", available="
				+ available + ", occupancyPercentage=" + occupancyPercentage + ", crowdLevel=" + crowdLevel
				+ ", updatedTime=" + updatedTime + '}';
	}

	// Enum
	public enum CrowdLevel {
		LOW, MEDIUM, HIGH, FULL
	}
}