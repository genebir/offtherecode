package com.last.code.controller.feed;

import com.last.code.model.feed.FeedDTO;
import com.last.code.model.feed.FilesDTO;
import com.last.code.model.feed.LikeDTO;
import com.last.code.model.feed.ReplyDTO;
import com.last.code.service.feed.*;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.*;

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
    @Autowired
    private ReplyService replyService;
    @Autowired
    private FilesService filesService;
    @Autowired
    private HashtagService hashtagService;

    @PostMapping("/insert")
    int insert(@RequestBody FeedDTO dto, MultipartFile[] files, @AuthenticationPrincipal String feed_user_fno) {
        String filePath = "C:\\code_photo\\feed_photo"; // 파일 저장 경로
        List<FilesDTO> fileList = new ArrayList<FilesDTO>();
        for(int i=0; i<files.length; i++) {
            MultipartFile file = files[i];

            String fileId = (new Date().getTime() + "" + (new Random().ints(1000, 9999).findAny().getAsInt()));
            String originName = file.getOriginalFilename();
            String fileExtension = originName.substring(originName.lastIndexOf(",") + 1);
            long fileSize = file.getSize();

            File fileSave = new File(filePath, fileId + "." + fileExtension);
            fileList.add(FilesDTO.builder()
                    .files_file(fileSave.toString())
                    .build());
            if(!fileSave.exists()) {
                // 저장 경로 폴더 없을 시 생성
                fileSave.mkdirs();
            }

        }
        // start of JWT
        dto.setFeed_user_fno(0);
        dto.setFeed_user_fno(Integer.parseInt(feed_user_fno));
        log.info(dto.toString());
        return  feedService.writeFeed(dto);
    }

    @PostMapping("/test")
        public int test(@RequestBody FeedDTO dto) {
            return feedService.writeFeed(dto);

    }

    @GetMapping("/detail")
    FeedDTO detail(@RequestParam("feed_pno") int pno) {
        FeedDTO dto = feedService.detailFeed(pno);
        dto.setFiles(filesService.files(pno));
        dto.setHashtags(hashtagService.tags(pno));

        List<LikeDTO> likeList = likeService.likeList(pno);
        for (LikeDTO likeDTO : likeList) {
            likeDTO.setLike_user_nick(userService.selectUserNick(likeDTO.getLike_user_fno()));
        }
        dto.setLikes(likeList);

        List<ReplyDTO> replyList = replyService.replyList(pno);
        for (ReplyDTO replyDTO : replyList) {
            replyDTO.setReply_user_nick(userService.selectUserNick(replyDTO.getReply_user_fno()));
        }
        dto.setReply(replyService.replyList(pno));

        dto.setFeed_user_nick(userService.selectUserNick(dto.getFeed_user_fno()));

        log.info(dto.toString());
        return dto;
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
