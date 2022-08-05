package com.last.code.controller.feed;

import com.last.code.model.feed.ReplyDTO;
import com.last.code.service.feed.ReplyService;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("reply")
public class ReplyController {

    @Autowired
    private ReplyService service;



    @PostMapping("/insert")
    public int writeReply(ReplyDTO dto, @AuthenticationPrincipal String reply_user_fno) {
        int userPno = Integer.parseInt(reply_user_fno);
        dto.setReply_user_fno(userPno);
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
