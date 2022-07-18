package com.last.code.service;

import com.last.code.dto.FeedDTO;
import com.last.code.repository.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedService {

    @Autowired
    private FeedRepository repository;

    public void addFeed(FeedDTO dto) {
        repository.save(dto.toEntity(dto));
    }
}
