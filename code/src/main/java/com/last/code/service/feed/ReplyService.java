package com.last.code.service.feed;

import com.last.code.model.feed.ReplyDTO;
import com.last.code.repository.feed.ReplyMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ReplyService {

    @Autowired
    private ReplyMapperRepository repository;

    public List<ReplyDTO> replyList(int reply_feed_fno) {
        return repository.replyList(reply_feed_fno);
    }

    public int writeReply(ReplyDTO dto) {
        return repository.writeReply(dto);
    }

    public int updateReply(ReplyDTO dto) {
        return repository.updateReply(dto);
    }

    public int deleteReply(int reply_pno) {
        return repository.deleteReply(reply_pno);
    }

    public List<Integer> selectFeedFnoByUserFno(int reply_user_fno) {
        List<Integer> feedFnos = repository.selectFeedFnoByUserFno(reply_user_fno);
        Collections.sort(feedFnos, Collections.reverseOrder());
        return feedFnos;
    }
}
