package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.models.Notification;
import com.example.demo.service.NotificationService;

@RestController
@RequestMapping("/notification")
@CrossOrigin(origins = "http://localhost:4200")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    // Save Notification
    @PostMapping("/save")
    public Notification saveNotification(@RequestBody Notification notification) {
        return notificationService.saveNotification(notification);
    }

    // Get All Notifications
    @GetMapping("/getall")
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    // Get Notification By Id
    @GetMapping("/get/{id}")
    public Optional<Notification> getNotificationById(@PathVariable Long id) {
        return notificationService.getNotificationById(id);
    }

    // Update Notification
    @PutMapping("/update/{id}")
    public Notification updateNotification(@PathVariable Long id,
                                           @RequestBody Notification notification) {

        return notificationService.updateNotification(id, notification);
    }

    // Delete Notification
    @DeleteMapping("/delete/{id}")
    public String deleteNotification(@PathVariable Long id) {

        notificationService.deleteNotification(id);
        return "Notification Deleted Successfully";
    }

}