package com.last.code.service.feed;

import com.last.code.model.feed.HashtagDTO;
import com.last.code.repository.feed.HashtagMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HashtagService {

    @Autowired
    private HashtagMapperRepository hashtagMapperRepository;

    public void updateHashtags(List<HashtagDTO> tagList) {
        int del = hashtagMapperRepository.deleteTag(tagList.get(0).getHashtag_feed_fno());

        if(del >= 0) {
            for(HashtagDTO dto : tagList) {
                hashtagMapperRepository.writeTag(dto);
            }
        }
    }

    public void writeTags(List<HashtagDTO> tagList) {
        for(HashtagDTO dto : tagList) {
            hashtagMapperRepository.writeTag(dto);
        }
    }


    public List<HashtagDTO> tags (int hashtag_feed_pno) {
        return hashtagMapperRepository.tagList(hashtag_feed_pno);
    }

}
