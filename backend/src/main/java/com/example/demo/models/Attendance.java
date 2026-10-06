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
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attendance_id")
    private Long attendanceId;

    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "bus_id", nullable = false)
    private Long busId;

    @Column(name = "scan_time")
    private LocalDateTime scanTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "scan_type")
    private ScanType scanType;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Default Constructor
    public Attendance() {
    }

    // Parameterized Constructor
    public Attendance(Long attendanceId, Long studentId, Long busId,
                      LocalDateTime scanTime, ScanType scanType,
                      LocalDateTime createdAt) {
        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.busId = busId;
        this.scanTime = scanTime;
        this.scanType = scanType;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public LocalDateTime getScanTime() {
        return scanTime;
    }

    public void setScanTime(LocalDateTime scanTime) {
        this.scanTime = scanTime;
    }

    public ScanType getScanType() {
        return scanType;
    }

    public void setScanType(ScanType scanType) {
        this.scanType = scanType;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Attendance{" +
                "attendanceId=" + attendanceId +
                ", studentId=" + studentId +
                ", busId=" + busId +
                ", scanTime=" + scanTime +
                ", scanType=" + scanType +
                ", createdAt=" + createdAt +
                '}';
    }

    // Enum
    public enum ScanType {
        BOARDING,
        ALIGHTING
    }
}