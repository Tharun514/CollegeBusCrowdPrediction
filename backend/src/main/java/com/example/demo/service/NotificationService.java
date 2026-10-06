package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.models.Notification;

public interface NotificationService {

    Notification saveNotification(Notification notification);

    List<Notification> getAllNotifications();

    Optional<Notification> getNotificationById(Long id);

    Notification updateNotification(Long id, Notification notification);

    void deleteNotification(Long id);

}