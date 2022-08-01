package com.last.code.controller.feed;

import com.last.code.model.feed.ReplyDTO;
import com.last.code.service.feed.ReplyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("reply")
public class ReplyController {

    @Autowired
    private ReplyService service;

    @GetMapping("/list")
    public List<ReplyDTO> ReplyList(int reply_feed_fno) {
        return service.replyList(reply_feed_fno);
    }

    @PostMapping("/insert")
    public int writeReply(ReplyDTO dto) {
        return service.writeReply(dto);
    }

    @PostMapping("/update")
    public int updateReply(ReplyDTO dto) {
        return service.updateReply(dto);
    }

    @GetMapping("/delete")
    public int deleteReply(int reply_pno) {
        return service.deleteReply(reply_pno);
    }

}
