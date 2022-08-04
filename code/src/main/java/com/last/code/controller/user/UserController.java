package com.last.code.controller.user;

import com.last.code.model.feed.FilesDTO;
import com.last.code.model.user.FollowDTO;
import com.last.code.model.user.UserDTO;
import com.last.code.security.TokenProvider;
import com.last.code.service.user.FollowService;
import com.last.code.service.user.UserInfoService;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@RestController
@Slf4j
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private TokenProvider tokenProvider;
    @Autowired
    private UserInfoService userInfoService;


    @Autowired
    private FollowService followService;

    @PostMapping("/signin") // 로그인 및 토큰 발행
    UserDTO signIn(@RequestBody UserDTO dto) {
        UserDTO responseUserDTO = new UserDTO();
        UserDTO userDTO = userService.signIn(dto);
        if(userDTO == null) {
            log.info("error");
            responseUserDTO.setToken("1"); // email이 일치하지 않으면 token key에 1을 넣어 response
        }
        if(userDTO != null) {
            log.info(userService.signIn(dto).toString());
            log.info(dto.toString());
            if(!userDTO.getUser_pw().equals(dto.getUser_pw())) {
              responseUserDTO.setToken("2"); // pw가 일치하지 않으면 token key에 2을 넣어 response
            }else if(userDTO.getUser_pw().equals(dto.getUser_pw())) {
                final String token = tokenProvider.create(userDTO);
                responseUserDTO = UserDTO.builder()
                        .user_email(userDTO.getUser_email())
                        .user_nick(userDTO.getUser_nick())
                        .token(token)
                        .build();
            }
        }
        return responseUserDTO;
    }

    @PostMapping("/signup") // 가입
    public void signUp(@RequestBody UserDTO dto) {
        userService.signUp(dto);
    }

    @PostMapping("/changepw") // 비밀번호 변경
    public void updatepw(@RequestParam("old_pw") String oldPw,
                         @RequestParam("new_pw") String newPw,
                         @AuthenticationPrincipal String user_pno) {
        UserDTO signUser = null;
        if(user_pno!=null) {
            signUser = userService.userDetail(Integer.parseInt(user_pno));
            log.info(signUser.toString());
        }
        if(signUser!=null) {
            if(signUser.equals(oldPw)) {
                signUser.setUser_pw(newPw);
                userService.updatePw(signUser);
                log.info("비밀번호 변경 완료");
            }
        }
    }

    @PostMapping("/delete") // 회원탈퇴
    public void deleteUser(@RequestParam("pw") String user_pw, @AuthenticationPrincipal String user_pno) {
        UserDTO dto = null;
        if(user_pno!=null) {
            dto = userService.userDetail(Integer.parseInt(user_pno));
        }
        if(dto.getUser_pw().equals(user_pw)) {
            userService.deleteUser(dto.getUser_pno());
        }
    }


    @GetMapping("/emailcheck") // email 중복 검사
    public int emailCheck(@RequestParam("checkemail") String email) {
        UserDTO dto = userService.signIn(UserDTO.builder().user_email(email).build());
        int flag = 0;
        if(dto!=null) {
            flag = 1;
        }
        return flag;
    }

    @GetMapping("/nickcheck") // nickname 중복 검사
    public int nickCheck(@RequestParam("checknick") String nick) {
        UserDTO dto = userService.selectByNick(nick);
        int flag = 0;
        if(dto != null) {
            flag = 1;
        }
        return  flag;
    }

    @GetMapping("/follow")
    public void follow(@RequestParam("follow_following_fno") String follow_following_fno, @AuthenticationPrincipal String follow_user_fno) {
        FollowDTO dto = null;
        int user_fno = Integer.parseInt(follow_user_fno);
        int following_fno = Integer.parseInt(follow_following_fno);

        if(user_fno != 0 && following_fno == 0) {
            dto = new FollowDTO(user_fno, following_fno);
        }
        if(dto != null) {
            followService.following(dto);
        } else {
            log.info("팔로우 controller 실패");
        }
    }

    @GetMapping("/unfollow")
    public void unfollow(@RequestParam("follow_following_fno") String follow_following_fno, @AuthenticationPrincipal String follow_user_fno) {
        FollowDTO dto = null;
        int user_fno = Integer.parseInt(follow_user_fno);
        int following_fno = Integer.parseInt(follow_following_fno);

        if(user_fno != 0 && following_fno == 0) {
            dto = new FollowDTO(user_fno, following_fno);
        }
        if(dto!=null) {
            followService.unfollowing(dto);
        } else {
            log.info("언팔로우 controller 실패");
        }
    }

    @GetMapping("/detail")
    public UserDTO userDetail(@AuthenticationPrincipal String user_pno) {
        int pno = Integer.parseInt(user_pno);
        UserDTO user = userService.userDetail(pno);

        List<String> followers = followerNick(followService.followerList(pno));
        List<String> following = followingNick(followService.followingList(pno));
        user.setFollowers(followers);
        user.setFollwings(following);
        user.setUserInfo(userInfoService.selectUserInfo(pno));

        return user;
    }

    List<String> followerNick(List<FollowDTO> follows) { // 팔로워 닉네임 받아오는 코드
        List<String> followers = new ArrayList<String>();
        for(FollowDTO dto : follows) {
            String nick = userService.selectUserNick(dto.getFollow_user_fno());
            followers.add(nick);
        }
        return followers;
    }

    List<String> followingNick(List<FollowDTO> follows) { // 팔로잉 닉네임 받아오기
        List<String> followings = new ArrayList<String>();
        for(FollowDTO dto : follows) {
            String nick = userService.selectUserNick(dto.getFollow_following_fno());
            followings.add(nick);
        }
        return followings;
    }



}