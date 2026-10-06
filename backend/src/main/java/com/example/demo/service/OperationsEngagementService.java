package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.OperationsEngagement;

public interface OperationsEngagementService {

    OperationsEngagement saveOperationsEngagement(OperationsEngagement operationsEngagement);

    List<OperationsEngagement> getAllOperationsEngagements();

    Optional<OperationsEngagement> getOperationsEngagementById(Long id);

    OperationsEngagement updateOperationsEngagement(Long id, OperationsEngagement operationsEngagement);

    void deleteOperationsEngagement(Long id);

}