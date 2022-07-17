package com.last.code.controller;

import com.last.code.dto.FeedDTO;
import com.last.code.service.FeedService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping(value = "feed")
public class FeedController {

    @Autowired
    private FeedService service;

    @PostMapping("/add")
    public String insert(@RequestParam("feedContent") String feedContent,
                       @RequestParam("feedFile") String feedFile,
                       @RequestParam("feedAlt") String feedAlt) {
        service.addFeed(new FeedDTO(null, feedContent, feedFile, feedAlt, null));
        return "insert success";
    }

}
