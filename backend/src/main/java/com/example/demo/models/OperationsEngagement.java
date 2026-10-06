package com.example.demo.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "operations_engagement")
public class OperationsEngagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operation_id")
    private Long operationId;

    @Column(name = "bus_id", nullable = false)
    private Long busId;

    @Column(name = "driver_id", nullable = false)
    private Long driverId;

    @Column(name = "route_id", nullable = false)
    private Long routeId;

    @Column(name = "operation_type")
    private String operationType;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Default Constructor
    public OperationsEngagement() {
    }

    // Parameterized Constructor
    public OperationsEngagement(Long operationId, Long busId,
            Long driverId, Long routeId,
            String operationType, String remarks,
            String status, LocalDateTime createdAt) {

        this.operationId = operationId;
        this.busId = busId;
        this.driverId = driverId;
        this.routeId = routeId;
        this.operationType = operationType;
        this.remarks = remarks;
        this.status = status;
        this.createdAt = createdAt;
    }

    // Getters and Setters

    public Long getOperationId() {
        return operationId;
    }

    public void setOperationId(Long operationId) {
        this.operationId = operationId;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
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

    public String getOperationType() {
        return operationType;
    }

    public void setOperationType(String operationType) {
        this.operationType = operationType;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Operations_Engagement{" +
                "operationId=" + operationId +
                ", busId=" + busId +
                ", driverId=" + driverId +
                ", routeId=" + routeId +
                ", operationType='" + operationType + '\'' +
                ", remarks='" + remarks + '\'' +
                ", status='" + status + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}