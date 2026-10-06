package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Route;

public interface RouteService {

    Route saveRoute(Route route);

    List<Route> getAllRoutes();

    Optional<Route> getRouteById(Long id);

    Route updateRoute(Long id, Route route);

    void deleteRoute(Long id);

}