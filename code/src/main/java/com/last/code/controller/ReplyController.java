package com.last.code.controller;

import com.last.code.model.ReplyDTO;
import com.last.code.service.ReplyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
