package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Route;
import com.example.demo.repository.RouteRepository;
import com.example.demo.service.RouteService;

@Service
public class RouteServiceImple implements RouteService {

    @Autowired
    private RouteRepository routeRepository;

    @Override
    public Route saveRoute(Route route) {
        return routeRepository.save(route);
    }

    @Override
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    @Override
    public Optional<Route> getRouteById(Long id) {
        return routeRepository.findById(id);
    }

    @Override
    public Route updateRoute(Long id, Route route) {

        Route existingRoute = routeRepository.findById(id).orElse(null);

        if (existingRoute != null) {

            existingRoute.setRouteName(route.getRouteName());
            existingRoute.setRouteCode(route.getRouteCode());
            existingRoute.setStartPoint(route.getStartPoint());
            existingRoute.setEndPoint(route.getEndPoint());
            existingRoute.setDistance(route.getDistance());
            existingRoute.setExpectedTime(route.getExpectedTime());
            existingRoute.setIsActive(route.getIsActive());

            return routeRepository.save(existingRoute);
        }

        return null;
    }

    @Override
    public void deleteRoute(Long id) {
        routeRepository.deleteById(id);
    }

}