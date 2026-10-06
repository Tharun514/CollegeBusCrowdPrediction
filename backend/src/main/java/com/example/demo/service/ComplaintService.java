package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Complaint;

public interface ComplaintService {

    Complaint saveComplaint(Complaint complaint);

    List<Complaint> getAllComplaints();

    Optional<Complaint> getComplaintById(Long id);

    Complaint updateComplaint(Long id, Complaint complaint);

    void deleteComplaint(Long id);

}