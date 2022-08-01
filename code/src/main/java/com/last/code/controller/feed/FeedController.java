package com.last.code.controller.feed;

import com.last.code.model.feed.FeedDTO;
import com.last.code.model.feed.LikeDTO;
import com.last.code.service.feed.FeedService;
import com.last.code.service.feed.LikeService;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("feed")
public class FeedController {

    @Autowired
    private FeedService feedService;

    @Autowired
    private LikeService likeService;

    @Autowired
    private UserService userService;

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
        return  feedService.writeFeed(dto);
    }

    @GetMapping("/detail")
    HashMap<String, Object> detail(@RequestParam("feed_pno") int pno) {
        HashMap<String, Object> detailData = feedService.detailFeed(pno);
        log.info(detailData.toString());
        return detailData;
    }


    @GetMapping("/delete")
    int delete(@RequestParam("feed_pno") int pno) {
        return feedService.deleteFeed(pno);
    }

    @PostMapping("/update")
    int update(@RequestBody FeedDTO dto) {
        return feedService.updateFeed(dto);
    }

    @GetMapping("/like")
    int likeFeed(@RequestParam("like_feed_fno") String like_feed_fno, @AuthenticationPrincipal String like_user_fno) {
        LikeDTO dto = LikeDTO.builder()
                .like_feed_fno(Integer.parseInt(like_feed_fno))
                .like_user_fno(Integer.parseInt(like_user_fno))
                .build();
        return likeService.likeFeed(dto);
    }

    @GetMapping("/unlike")
    int unlikeFeed(@RequestParam("like_feed_fno") String like_feed_fno, @AuthenticationPrincipal String like_user_fno) {
        LikeDTO dto = LikeDTO.builder()
                .like_feed_fno(Integer.parseInt(like_feed_fno))
                .like_user_fno(Integer.parseInt(like_user_fno))
                .build();
        return likeService.unlikeFeed(dto);
    }

    @GetMapping("/likelist")
    List<String> likeList(@RequestParam("like_feed_fno") String like_feed_fno) {
        List<LikeDTO> likeList = likeService.likeList(Integer.parseInt(like_feed_fno));
        List<String> likeUserList = new ArrayList<String>();
        for(LikeDTO dto : likeList) {
            likeUserList.add(userService.selectUserNick(dto.getLike_user_fno()));
        }
        return likeUserList;
    }

}
