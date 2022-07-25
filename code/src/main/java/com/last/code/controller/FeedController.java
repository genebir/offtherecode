package com.last.code.controller;

import com.last.code.model.FeedDTO;
import com.last.code.service.FeedService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping("feed")
public class FeedController {

    @Autowired
    private FeedService service;

    @PostMapping("/insert")
    int insert(@RequestBody FeedDTO dto) {
      return   service.writeFeed(dto);
    }

    @GetMapping("/detail")
    FeedDTO detail(@RequestParam("feed_pno") int pno) {
        return service.detailFeed(pno);
    }

    @GetMapping("/delete")
    int delete(@RequestParam("feed_pno") int pno) {
        return service.deleteFeed(pno);
    }

    @PostMapping("/update")
    int update(@RequestBody FeedDTO dto) {
        return service.updateFeed(dto);
    }

}
