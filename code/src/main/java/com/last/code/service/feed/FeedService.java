package com.last.code.service.feed;

import com.last.code.model.feed.FeedDTO;
import com.last.code.repository.feed.FeedMapperRepository;
import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;

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

    public String updateFeed(FeedDTO dto) {
        String flag = "피드 업데이트 실패";
        int cnt = repository.updateFeed(dto);

        if(cnt>0) {
            flag = "피드 업데이트 성공";
        }
        return flag;
    }

    public List<Integer> selectByUserFno(int feed_user_fno) {
        List<Integer> feedPnos = repository.selectByUserFno(feed_user_fno);
        Collections.sort(feedPnos, Collections.reverseOrder());
        return feedPnos;
    }
}
