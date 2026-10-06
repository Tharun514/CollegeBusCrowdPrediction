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
@Table(name = "stops")
public class stops {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stop_id")
    private Long stopId;

    @Column(name = "route_id", nullable = false)
    private Long routeId;

    @Column(name = "stop_name", nullable = false)
    private String stopName;

    @Column(nullable = false)
    private BigDecimal latitude;

    @Column(nullable = false)
    private BigDecimal longitude;

    @Column(nullable = false)
    private Integer sequence;

    @Column(name = "is_major_stop")
    private Boolean isMajorStop = false;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Default Constructor
    public stops() {
    }

    // Parameterized Constructor
    public stops(Long stopId, Long routeId, String stopName,
                 BigDecimal latitude, BigDecimal longitude,
                 Integer sequence, Boolean isMajorStop,
                 LocalDateTime createdAt) {

        this.stopId = stopId;
        this.routeId = routeId;
        this.stopName = stopName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.sequence = sequence;
        this.isMajorStop = isMajorStop;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getStopId() {
        return stopId;
    }

    public void setStopId(Long stopId) {
        this.stopId = stopId;
    }

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public String getStopName() {
        return stopName;
    }

    public void setStopName(String stopName) {
        this.stopName = stopName;
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

    public Integer getSequence() {
        return sequence;
    }

    public void setSequence(Integer sequence) {
        this.sequence = sequence;
    }

    public Boolean getIsMajorStop() {
        return isMajorStop;
    }

    public void setIsMajorStop(Boolean isMajorStop) {
        this.isMajorStop = isMajorStop;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "stops{" +
                "stopId=" + stopId +
                ", routeId=" + routeId +
                ", stopName='" + stopName + '\'' +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", sequence=" + sequence +
                ", isMajorStop=" + isMajorStop +
                ", createdAt=" + createdAt +
                '}';
    }
}