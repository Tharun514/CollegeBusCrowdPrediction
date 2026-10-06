package com.example.demo.models;

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
@Table(name = "bus_delay")
public class BusDelay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delay_id")
    private Long delayId;

    @Column(name = "bus_id", nullable = false)
    private Long busId;

    @Column(nullable = false)
    private String reason;

    @Column(name = "delay_minutes")
    private Integer delayMinutes;

    @Enumerated(EnumType.STRING)
    private DelayStatus status = DelayStatus.PENDING;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "resolved_at")
    private LocalDateTime resolvedAt;

    // Default Constructor
    public BusDelay() {
    }

    // Parameterized Constructor
    public BusDelay(Long delayId, Long busId, String reason,
                     Integer delayMinutes, DelayStatus status,
                     LocalDateTime createdAt, LocalDateTime resolvedAt) {

        this.delayId = delayId;
        this.busId = busId;
        this.reason = reason;
        this.delayMinutes = delayMinutes;
        this.status = status;
        this.createdAt = createdAt;
        this.resolvedAt = resolvedAt;
    }

    // Getters and Setters

    public Long getDelayId() {
        return delayId;
    }

    public void setDelayId(Long delayId) {
        this.delayId = delayId;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getDelayMinutes() {
        return delayMinutes;
    }

    public void setDelayMinutes(Integer delayMinutes) {
        this.delayMinutes = delayMinutes;
    }

    public DelayStatus getStatus() {
        return status;
    }

    public void setStatus(DelayStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getResolvedAt() {
        return resolvedAt;
    }

    public void setResolvedAt(LocalDateTime resolvedAt) {
        this.resolvedAt = resolvedAt;
    }

    @Override
    public String toString() {
        return "Bus_Delay{" +
                "delayId=" + delayId +
                ", busId=" + busId +
                ", reason='" + reason + '\'' +
                ", delayMinutes=" + delayMinutes +
                ", status=" + status +
                ", createdAt=" + createdAt +
                ", resolvedAt=" + resolvedAt +
                '}';
    }

    // Enum
    public enum DelayStatus {
        PENDING,
        RESOLVED,
        CANCELLED
    }
}