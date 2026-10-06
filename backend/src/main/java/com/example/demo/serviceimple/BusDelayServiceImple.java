package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.BusDelay;
import com.example.demo.repository.BusDelayRepository;
import com.example.demo.service.BusDelayService;

@Service
public class BusDelayServiceImple implements BusDelayService {

    @Autowired
    private BusDelayRepository busDelayRepository;

    @Override
    public BusDelay saveBusDelay(BusDelay busDelay) {
        return busDelayRepository.save(busDelay);
    }

    @Override
    public List<BusDelay> getAllBusDelays() {
        return busDelayRepository.findAll();
    }

    @Override
    public Optional<BusDelay> getBusDelayById(Long id) {
        return busDelayRepository.findById(id);
    }

    @Override
    public BusDelay updateBusDelay(Long id, BusDelay busDelay) {

        BusDelay existingBusDelay =
                busDelayRepository.findById(id).orElse(null);

        if (existingBusDelay != null) {

            existingBusDelay.setBusId(busDelay.getBusId());
            existingBusDelay.setReason(busDelay.getReason());
            existingBusDelay.setDelayMinutes(busDelay.getDelayMinutes());
            existingBusDelay.setStatus(busDelay.getStatus());
            existingBusDelay.setCreatedAt(busDelay.getCreatedAt());
            existingBusDelay.setResolvedAt(busDelay.getResolvedAt());

            return busDelayRepository.save(existingBusDelay);
        }

        return null;
    }

    @Override
    public void deleteBusDelay(Long id) {
        busDelayRepository.deleteById(id);
    }

}