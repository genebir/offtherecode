package com.last.code.service.feed;

import com.last.code.model.feed.LikeDTO;
import com.last.code.repository.feed.FeedMapperRepository;
import com.last.code.repository.feed.LikeMapperRepository;
import com.last.code.repository.user.UserMapperRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class LikeService {

    @Autowired
    private LikeMapperRepository likeMapperRepository;


    public List<LikeDTO> likeList(int like_feed_fno) {
        return likeMapperRepository.likeUserList(like_feed_fno);
    }

    public int likeFeed(LikeDTO dto) {
        return likeMapperRepository.likeFeed(dto);
    }

    public int unlikeFeed(LikeDTO dto) {
        return likeMapperRepository.unlikeFeed(dto);
    }

}
