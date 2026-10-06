package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Complaint;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.service.ComplaintService;

@Service
public class ComplaintServiceImple implements ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Override
    public Complaint saveComplaint(Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    @Override
    public Optional<Complaint> getComplaintById(Long id) {
        return complaintRepository.findById(id);
    }

    @Override
    public Complaint updateComplaint(Long id, Complaint complaint) {

        Complaint existingComplaint =
                complaintRepository.findById(id).orElse(null);

        if (existingComplaint != null) {

            existingComplaint.setStudentId(complaint.getStudentId());
            existingComplaint.setTitle(complaint.getTitle());
            existingComplaint.setDescription(complaint.getDescription());
            existingComplaint.setImageUrl(complaint.getImageUrl());
            existingComplaint.setStatus(complaint.getStatus());
            existingComplaint.setCreatedAt(complaint.getCreatedAt());
            existingComplaint.setResolvedAt(complaint.getResolvedAt());
            existingComplaint.setResolvedBy(complaint.getResolvedBy());

            return complaintRepository.save(existingComplaint);
        }

        return null;
    }

    @Override
    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }

}