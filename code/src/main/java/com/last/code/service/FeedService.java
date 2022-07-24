package com.last.code.service;

import com.last.code.model.FeedDTO;
import com.last.code.repository.FeedMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedService {

    @Autowired
    private FeedMapperRepository repository;

    public void writeFeed(FeedDTO dto) {
        repository.writeFeed(dto);
    }

    public FeedDTO detailFeed(int pno) {
        return repository.feedDetail(pno);
    }

}
