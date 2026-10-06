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
@Table(name = "bus")
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bus_id")
    private Long busId;

    @Column(name = "bus_no", nullable = false, unique = true)
    private String busNo;

    @Column(name = "registration_number", nullable = false, unique = true)
    private String registrationNumber;

    @Column(nullable = false)
    private Integer capacity = 50;

    @Column(name = "current_lat")
    private BigDecimal currentLat;

    @Column(name = "current_lng")
    private BigDecimal currentLng;

    @Enumerated(EnumType.STRING)
    private BusStatus status = BusStatus.ACTIVE;

    @Column(name = "driver_id")
    private Long driverId;

    @Column(name = "route_id")
    private Long routeId;

    private BigDecimal speed;

    @Column(name = "current_stop")
    private String currentStop;

    @Column(name = "next_stop")
    private String nextStop;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Default Constructor
    public Bus() {
    }

    // Parameterized Constructor
    public Bus(Long busId, String busNo, String registrationNumber,
               Integer capacity, BigDecimal currentLat,
               BigDecimal currentLng, BusStatus status,
               Long driverId, Long routeId,
               BigDecimal speed, String currentStop,
               String nextStop, LocalDateTime createdAt) {

        this.busId = busId;
        this.busNo = busNo;
        this.registrationNumber = registrationNumber;
        this.capacity = capacity;
        this.currentLat = currentLat;
        this.currentLng = currentLng;
        this.status = status;
        this.driverId = driverId;
        this.routeId = routeId;
        this.speed = speed;
        this.currentStop = currentStop;
        this.nextStop = nextStop;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
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

    public BigDecimal getCurrentLat() {
        return currentLat;
    }

    public void setCurrentLat(BigDecimal currentLat) {
        this.currentLat = currentLat;
    }

    public BigDecimal getCurrentLng() {
        return currentLng;
    }

    public void setCurrentLng(BigDecimal currentLng) {
        this.currentLng = currentLng;
    }

    public BusStatus getStatus() {
        return status;
    }

    public void setStatus(BusStatus status) {
        this.status = status;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public BigDecimal getSpeed() {
        return speed;
    }

    public void setSpeed(BigDecimal speed) {
        this.speed = speed;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "busId=" + busId +
                ", busNo='" + busNo + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", capacity=" + capacity +
                ", currentLat=" + currentLat +
                ", currentLng=" + currentLng +
                ", status=" + status +
                ", driverId=" + driverId +
                ", routeId=" + routeId +
                ", speed=" + speed +
                ", currentStop='" + currentStop + '\'' +
                ", nextStop='" + nextStop + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }

    // Enum
    public enum BusStatus {
        ACTIVE,
        MAINTENANCE,
        INACTIVE
    }
}