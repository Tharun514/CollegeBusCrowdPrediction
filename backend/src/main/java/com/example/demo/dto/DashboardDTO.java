package com.example.demo.dto;

public class DashboardDTO {

    private Long totalStudents;
    private Long totalDrivers;
    private Long totalBuses;
    private Long totalRoutes;
    private Long totalAttendance;
    private Long totalComplaints;

    public DashboardDTO() {}

    public DashboardDTO(Long totalStudents,
                        Long totalDrivers,
                        Long totalBuses,
                        Long totalRoutes,
                        Long totalAttendance,
                        Long totalComplaints) {

        this.totalStudents = totalStudents;
        this.totalDrivers = totalDrivers;
        this.totalBuses = totalBuses;
        this.totalRoutes = totalRoutes;
        this.totalAttendance = totalAttendance;
        this.totalComplaints = totalComplaints;
    }

    public Long getTotalStudents() {
        return totalStudents;
    }

    public void setTotalStudents(Long totalStudents) {
        this.totalStudents = totalStudents;
    }

    public Long getTotalDrivers() {
        return totalDrivers;
    }

    public void setTotalDrivers(Long totalDrivers) {
        this.totalDrivers = totalDrivers;
    }

    public Long getTotalBuses() {
        return totalBuses;
    }

    public void setTotalBuses(Long totalBuses) {
        this.totalBuses = totalBuses;
    }

    public Long getTotalRoutes() {
        return totalRoutes;
    }

    public void setTotalRoutes(Long totalRoutes) {
        this.totalRoutes = totalRoutes;
    }

    public Long getTotalAttendance() {
        return totalAttendance;
    }

    public void setTotalAttendance(Long totalAttendance) {
        this.totalAttendance = totalAttendance;
    }

    public Long getTotalComplaints() {
        return totalComplaints;
    }

    public void setTotalComplaints(Long totalComplaints) {
        this.totalComplaints = totalComplaints;
    }

}