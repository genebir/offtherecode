package com.last.code.controller.user;

import com.last.code.model.user.UserInfoDTO;
import com.last.code.service.user.UserInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("userinfo")
@Slf4j
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/insert")
    public void insertUserInfo(@RequestParam("userinfo_lang") String userinfo_lang,
                               @RequestParam("userinfo_other") String userinfo_other,
                               @RequestParam("userinfo_phone") String userinfo_phone,
                               @RequestParam("userinfo_photo") MultipartFile file,
                               @AuthenticationPrincipal String userinfo_user_fno) {
        int userFno = Integer.parseInt(userinfo_user_fno);

        String UPLOAD_PATH = "C:/code_photo/user_photo" + new Date().getTime(); // 업로드 할 위치 // 현재 날짜 값 폴더

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
        UserInfoDTO userInfoDTO = UserInfoDTO.builder()
                        .userinfo_user_fno(userFno)
                                .userinfo_lang(userinfo_lang)
                                        .userinfo_phone(userinfo_phone)
                                                .userinfo_other(userinfo_other)
                                                        .userinfo_photo(UPLOAD_PATH +"/"+ originName + "." + type)
                                                                .build();

        if(userInfoService.selectUserInfo(userFno) != null) {
            userInfoService.deleteUserInfo(userFno);
        }
        userInfoService.insertUserInfo(userInfoDTO);
    }




}
