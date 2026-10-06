package com.example.demo.models;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "real_time_tracking")
public class RealTimeTracking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tracking_id")
    private Long trackingId;

    @Column(name = "bus_id", nullable = false)
    private Long busId;

    @Column(nullable = false)
    private BigDecimal latitude;

    @Column(nullable = false)
    private BigDecimal longitude;

    @Column(name = "current_speed")
    private BigDecimal currentSpeed;

    @Column(name = "current_stop")
    private String currentStop;

    @Column(name = "next_stop")
    private String nextStop;

    @Column(name = "eta_minutes")
    private Integer etaMinutes;

    @Column(name = "tracking_time")
    private LocalDateTime trackingTime;

    // Default Constructor
    public RealTimeTracking() {
    }

    // Parameterized Constructor
    public RealTimeTracking(Long trackingId, Long busId,
                              BigDecimal latitude, BigDecimal longitude,
                              BigDecimal currentSpeed, String currentStop,
                              String nextStop, Integer etaMinutes,
                              LocalDateTime trackingTime) {

        this.trackingId = trackingId;
        this.busId = busId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.currentSpeed = currentSpeed;
        this.currentStop = currentStop;
        this.nextStop = nextStop;
        this.etaMinutes = etaMinutes;
        this.trackingTime = trackingTime;
    }

    // Getters and Setters

    public Long getTrackingId() {
        return trackingId;
    }

    public void setTrackingId(Long trackingId) {
        this.trackingId = trackingId;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getCurrentSpeed() {
        return currentSpeed;
    }

    public void setCurrentSpeed(BigDecimal currentSpeed) {
        this.currentSpeed = currentSpeed;
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

    public Integer getEtaMinutes() {
        return etaMinutes;
    }

    public void setEtaMinutes(Integer etaMinutes) {
        this.etaMinutes = etaMinutes;
    }

    public LocalDateTime getTrackingTime() {
        return trackingTime;
    }

    public void setTrackingTime(LocalDateTime trackingTime) {
        this.trackingTime = trackingTime;
    }

    @Override
    public String toString() {
        return "Real_Time_Tracking{" +
                "trackingId=" + trackingId +
                ", busId=" + busId +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", currentSpeed=" + currentSpeed +
                ", currentStop='" + currentStop + '\'' +
                ", nextStop='" + nextStop + '\'' +
                ", etaMinutes=" + etaMinutes +
                ", trackingTime=" + trackingTime +
                '}';
    }
}