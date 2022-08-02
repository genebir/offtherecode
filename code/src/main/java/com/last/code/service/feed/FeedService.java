package com.last.code.service.feed;

import com.last.code.model.feed.FeedDTO;
import com.last.code.repository.feed.FeedMapperRepository;
import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class FeedService {

    @Autowired
    private FeedMapperRepository repository;

    public int writeFeed(FeedDTO dto) {

        return repository.writeFeed(dto);
    }

    public FeedDTO detailFeed(int pno) {
        return repository.feedDetail(pno);
    }

    public int deleteFeed(int pno) {
        return repository.deleteFeed(pno);
    }

    public int updateFeed(FeedDTO dto) {
        return repository.updateFeed(dto);
    }
}
