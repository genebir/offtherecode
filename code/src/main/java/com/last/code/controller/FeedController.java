package com.last.code.controller;

import com.last.code.dto.FeedDTO;
import com.last.code.dto.UserDTO;
import com.last.code.repository.UserRepository;
import com.last.code.service.FeedService;
import com.last.code.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
@RequestMapping(value = "feed")
public class FeedController {

    @Autowired
    private FeedService service;
    @Autowired
    private UserService userService;


    @PostMapping("/add")
    public void insert(@RequestParam("feedContent") String feedContent,
                       @RequestParam("feedFile") String feedFile,
                       @RequestParam("feedAlt") String feedAlt) {
        service.addFeed(new FeedDTO(null, feedContent, UserDTO.toEntity(userService.findUser("duarltmd@naver.com")), feedFile, feedAlt, null));
    }

}
