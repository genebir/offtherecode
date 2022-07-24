package com.last.code.controller;

import com.last.code.model.FeedDTO;
import com.last.code.service.FeedService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("feed")
public class FeedController {

    @Autowired
    private FeedService service;

    @PostMapping("/insert")
    void insert(@RequestBody FeedDTO dto) {
        service.writeFeed(dto);
    }

    @GetMapping("/detail")
    FeedDTO detail(@RequestParam("feed_pno") int pno) {
        return service.detailFeed(pno);
    }
}
