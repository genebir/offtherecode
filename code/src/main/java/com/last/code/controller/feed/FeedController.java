package com.last.code.controller.feed;

import com.last.code.model.feed.*;
import com.last.code.model.user.FollowDTO;
import com.last.code.service.feed.*;
import com.last.code.service.user.FollowService;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
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
    private HashtagService hashtagService;
    @Autowired
    private FollowService followService;


    @PostMapping("/testfile")
    void testfile(@RequestParam("file") MultipartFile file) {
        String UPLOAD_PATH = "C:\\code_photo\\feed_photo" + new Date().getTime(); // 업로드 할 위치 // 현재 날짜 값 폴더
        log.info(file.toString());

        String originName = file.getOriginalFilename(); // 파일.type
        String[] tempStr = originName.split("\\.");
        originName = tempStr[0];
        String type = tempStr[1];

        File fileSave = new File(UPLOAD_PATH, originName + "." + type); // 경로/파일.type

        if (!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
            fileSave.mkdirs();
        }

        try {
            file.transferTo(fileSave);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // transferTo(File file) > multipartFile을 주어진 file의 경로로 이동

    }
    @PostMapping("/insert") // 피드 작성
    void insert(@RequestParam("feed_content") String feed_content,
               @RequestParam("feed_hashtag") String hashtag,
               @RequestParam("feed_file") MultipartFile file,
               @AuthenticationPrincipal String feed_user_fno) {

        String UPLOAD_PATH = "C:/code_photo/feed_photo" + new Date().getTime(); // 업로드 할 위치 // 현재 날짜 값 폴더

        int fileFlag = 0;
        String originName = file.getOriginalFilename(); // 파일.type
        String[] tempStr = originName.split("\\.");
        originName = tempStr[0];
        String type = tempStr[1];

        File fileSave = new File(UPLOAD_PATH, originName + "." + type); // 경로/파일.type

        if (!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
            fileSave.mkdirs();
        }

        try {
            file.transferTo(fileSave);
            fileFlag = 1;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // transferTo(File file) > multipartFile을 주어진 file의 경로로 이동


        log.info(UPLOAD_PATH +"/" +originName + "." + type);

        FeedDTO dto = FeedDTO.builder()
                .feed_content(feed_content)
                .feed_file(UPLOAD_PATH +"/" +originName + "." + type)
                .feed_user_fno(Integer.parseInt(feed_user_fno))
                .build();

        log.info(dto.toString());


        feedService.writeFeed(dto);
        log.info(dto.toString());

        String[] hashtags = hashtag.split("#");
        log.info(Arrays.toString(hashtags));
        List<HashtagDTO> hashtagList = new ArrayList<HashtagDTO>();
        for(String tag : hashtags) {
            String result = tag.trim();
            HashtagDTO hashtagDTO = HashtagDTO.builder().hashtag_content(result).hashtag_feed_fno(dto.getFeed_pno()).build();
            hashtagList.add(hashtagDTO);
        }
       for(int i=0; i<hashtagList.size(); i++) {
           HashtagDTO hashtagDTO = hashtagList.get(i);
           if(hashtagDTO.getHashtag_content().equals("")) {
               hashtagList.remove(i);
           }
       }
        log.info(hashtagList.toString());
        hashtagService.writeTags(hashtagList);
    }




    @PostMapping("/testfollow")
    public int test(@RequestBody FeedDTO dto, @AuthenticationPrincipal String feed_user_fno) {
        dto.setFeed_user_fno(Integer.parseInt(feed_user_fno));
        feedService.writeFeed(dto);
        return dto.getFeed_pno();
    }

    @GetMapping("/delete")
    int delete(@RequestParam("feed_pno") int pno) {
        return feedService.deleteFeed(pno);
    }

    @PostMapping("/update")
    String update(@RequestParam("feed_pno") String feed_pno,
                  @RequestParam("feed_content") String feed_content,
                  @RequestParam("feed_hashtag") String hashtag,
                  @RequestParam("feed_file") MultipartFile file,
                  @AuthenticationPrincipal String feed_user_fno) {
        String flag = "DB접속 실패";
        FeedDTO dto = feedService.detailFeed(Integer.parseInt(feed_pno));

        if(dto.getFeed_user_fno() == Integer.parseInt(feed_user_fno)) {
            String UPLOAD_PATH = "C:\\code_photo\\feed_photo" + new Date().getTime(); // 업로드 할 위치 // 현재 날짜 값 폴더

            int fileFlag = 0;
            String originName = file.getOriginalFilename(); // 파일.type
            String[] tempStr = originName.split("\\.");
            originName = tempStr[0];
            String type = tempStr[1];

            File fileSave = new File(UPLOAD_PATH, originName + "." + type); // 경로/파일.type

            if (!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
                fileSave.mkdirs();
            }

            try {
                file.transferTo(fileSave);
                fileFlag = 1;
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            // transferTo(File file) > multipartFile을 주어진 file의 경로로 이동


            FeedDTO updateDTO = FeedDTO.builder()
                    .feed_content(feed_content)
                    .feed_file(UPLOAD_PATH + originName + "." + type)
                    .feed_user_fno(Integer.parseInt(feed_user_fno))
                    .build();

            feedService.updateFeed(updateDTO);
            String[] hashtags = hashtag.split("#");
            List<HashtagDTO> hashtagList = new ArrayList<HashtagDTO>();
            for(String tag : hashtags) {
                String result = tag.trim();
                HashtagDTO hashtagDTO = HashtagDTO.builder().hashtag_content(result).hashtag_feed_fno(dto.getFeed_pno()).build();
                hashtagList.add(hashtagDTO);
            }
            hashtagService.updateHashtags(hashtagList);
        }


        return flag;
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


    int LIST_IDX =0;
    int MAX_IDX = 5;
    int userFno = 0;
    @GetMapping("/list")
    List<FeedDTO> feedList(@AuthenticationPrincipal String user_pno) {
        if(user_pno != null) {
            userFno = Integer.parseInt(user_pno);
        } else {
            userFno = 0;
        }
        List<FeedDTO> feedList = new ArrayList<FeedDTO>();
        List<Integer> followingFeeds = new ArrayList<Integer>();
        List<Integer> followingReplys = new ArrayList<Integer>();
        List<Integer> followingLikes = new ArrayList<Integer>();
        LinkedHashSet<Integer> feedPnos = new LinkedHashSet<Integer>();
        List<Integer> allFeedFnos = new ArrayList<Integer>();

        if(LIST_IDX == 0) {
            List<Integer> followingUsers = followService.selectFollowingList(userFno);



            if (followingUsers.size() != 0) {
                for (int followingUser : followingUsers) {
                    List<Integer> feeds = feedService.selectByUserFnoTwoDays(followingUser);
                    if (feeds.size() != 0) {
                        for (int feedPno : feeds) {
                            followingFeeds.add(feedPno);
                        }
                    }
                    List<Integer> replys = replyService.selectFeedFnoByUserFno(followingUser);
                    if (replys.size() != 0) {
                        for (int replyFeedFno : replys) {
                            followingReplys.add(replyFeedFno);
                        }
                    }
                    List<Integer> likes = likeService.selectFeedFnoByUserFno(followingUser);
                    if (likes.size() != 0) {
                        for (int likeFeedFno : likes) {
                            followingLikes.add(likeFeedFno);
                        }
                    }
                }
            }
            if (followingFeeds.size() != 0) {
                for (int feed : followingFeeds) {
                    feedPnos.add(feed);
                }
            }
            if (followingReplys.size() != 0) {
                for (int reply : followingReplys) {
                    feedPnos.add(reply);
                }
            }
            if (followingLikes.size() != 0) {
                for (int like : followingLikes) {
                    feedPnos.add(like);
                }
            }

            Iterator<Integer> il = feedPnos.iterator();
            while (il.hasNext()) {
                allFeedFnos.add(il.next());
            }
        }
        try {
            feedList.clear();
            for (int i = LIST_IDX; i < MAX_IDX; i++) {
                feedList.add(detail(allFeedFnos.get(i)));
            }
        } catch (NullPointerException e) {
            feedList.clear();
        }
        log.info(LIST_IDX + "");
        LIST_IDX += 5;
        MAX_IDX += 5;

        return feedList;
    }


    @GetMapping("/detail")
    FeedDTO detail(@RequestParam("feed_pno") String feed_pno) {
        int feedPno = Integer.parseInt(feed_pno);
        return detail(feedPno);
    }
    FeedDTO detail(int pno) {

        FeedDTO dto = feedService.detailFeed(pno);
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

}
