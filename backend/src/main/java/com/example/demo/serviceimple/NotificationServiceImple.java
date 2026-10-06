package com.example.demo.serviceimple;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Notification;
import com.example.demo.repository.NotificationRepository;
import com.example.demo.service.NotificationService;

@Service
public class NotificationServiceImple implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @Override
    public Optional<Notification> getNotificationById(Long id) {
        return notificationRepository.findById(id);
    }

    @Override
    public Notification updateNotification(Long id, Notification notification) {

        Notification existingNotification =
                notificationRepository.findById(id).orElse(null);

        if (existingNotification != null) {

            existingNotification.setStudentId(notification.getStudentId());
            existingNotification.setBusId(notification.getBusId());
            existingNotification.setTitle(notification.getTitle());
            existingNotification.setMessage(notification.getMessage());
            existingNotification.setType(notification.getType());
            existingNotification.setStatus(notification.getStatus());
            existingNotification.setIsRead(notification.getIsRead());
            existingNotification.setCreatedAt(notification.getCreatedAt());
            existingNotification.setReadAt(notification.getReadAt());

            return notificationRepository.save(existingNotification);
        }

        return null;
    }

    @Override
    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }

}