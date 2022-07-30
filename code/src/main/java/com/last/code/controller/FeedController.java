package com.last.code.controller;

import com.last.code.model.FeedDTO;
import com.last.code.service.FeedService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("feed")
public class FeedController {

    @Autowired
    private FeedService service;

    @PostMapping("/insert")
    int insert(@RequestBody FeedDTO dto, MultipartFile[] files, @AuthenticationPrincipal String feed_user_fno) {
//        String filePath = "C:\\code_photo\\feed_photo"; // 파일 저장 경로
//        List<String> fileList = new ArrayList<String>();
//        for(int i=0; i<files.length; i++) {
//            MultipartFile file = files[i];
//
//            String fileId = (new Date().getTime() + "" + (new Random().ints(1000, 9999).findAny().getAsInt()));
//            String originName = file.getOriginalFilename();
//            String fileExtension = originName.substring(originName.lastIndexOf(",") + 1);
//            long fileSize = file.getSize();
//
//            File fileSave = new File(filePath, fileId + "." + fileExtension);
//            fileList.add(fileSave.toString());
//            if(!fileSave.exists()) {
//                // 저장 경로 폴더 없을 시 생성
//                fileSave.mkdirs();
//            }
//        }
//        dto.setFeed_file(fileList.toString());
        // start of JWT
        dto.setFeed_user_fno(0);
        dto.setFeed_user_fno(Integer.parseInt(feed_user_fno));
        log.info(dto.toString());
        return   service.writeFeed(dto);
    }

    @GetMapping("/detail")
    FeedDTO detail(@RequestParam("feed_pno") int pno) {
        FeedDTO detailData = service.detailFeed(pno);
        String[] fileData = detailData.getFeed_file().split(",");
        return detailData;
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
