package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.OperationsEngagement;
import com.example.demo.repository.OperationsEngagementRepository;
import com.example.demo.service.OperationsEngagementService;

@Service
public class OperationsEngagementServiceImple implements OperationsEngagementService {

    @Autowired
    private OperationsEngagementRepository operationsEngagementRepository;

    @Override
    public OperationsEngagement saveOperationsEngagement(OperationsEngagement operationsEngagement) {
        return operationsEngagementRepository.save(operationsEngagement);
    }

    @Override
    public List<OperationsEngagement> getAllOperationsEngagements() {
        return operationsEngagementRepository.findAll();
    }

    @Override
    public Optional<OperationsEngagement> getOperationsEngagementById(Long id) {
        return operationsEngagementRepository.findById(id);
    }

    @Override
    public OperationsEngagement updateOperationsEngagement(Long id,
            OperationsEngagement operationsEngagement) {

        OperationsEngagement existingOperationsEngagement =
                operationsEngagementRepository.findById(id).orElse(null);

        if (existingOperationsEngagement != null) {

            existingOperationsEngagement.setBusId(operationsEngagement.getBusId());
            existingOperationsEngagement.setDriverId(operationsEngagement.getDriverId());
            existingOperationsEngagement.setRouteId(operationsEngagement.getRouteId());
            existingOperationsEngagement.setOperationType(operationsEngagement.getOperationType());
            existingOperationsEngagement.setRemarks(operationsEngagement.getRemarks());
            existingOperationsEngagement.setStatus(operationsEngagement.getStatus());
            existingOperationsEngagement.setCreatedAt(operationsEngagement.getCreatedAt());

            return operationsEngagementRepository.save(existingOperationsEngagement);
        }

        return null;
    }

    @Override
    public void deleteOperationsEngagement(Long id) {
        operationsEngagementRepository.deleteById(id);
    }

}