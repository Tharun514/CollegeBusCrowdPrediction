package com.example.demo.service;

import com.example.demo.models.Settings;

public interface SettingsService {

	Settings save(Settings settings);

	Settings getSettings();

}