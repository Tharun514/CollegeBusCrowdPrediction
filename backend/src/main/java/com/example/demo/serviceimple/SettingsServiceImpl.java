package com.example.demo.serviceimple;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Settings;
import com.example.demo.repository.SettingsRepository;
import com.example.demo.service.SettingsService;

@Service
public class SettingsServiceImpl implements SettingsService {

	@Autowired
	private SettingsRepository settingsRepository;

	@Override
	public Settings save(Settings settings) {

		if (settings.getId() == null) {

			Optional<Settings> existing = settingsRepository.findAll().stream().findFirst();

			if (existing.isPresent()) {
				settings.setId(existing.get().getId());
			}
		}

		return settingsRepository.save(settings);
	}

	@Override
	public Settings getSettings() {

		Optional<Settings> settings = settingsRepository.findAll().stream().findFirst();

		return settings.orElse(new Settings());
	}
}