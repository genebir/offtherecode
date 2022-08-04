package com.last.code.controller.user;

import com.last.code.model.user.UserInfoDTO;
import com.last.code.service.user.UserInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("userinfo")
@Slf4j
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("/insert")
    public void insertUserInfo(@RequestBody UserInfoDTO dto, MultipartFile photo, @AuthenticationPrincipal String userinfo_user_fno) {
        int userFno = Integer.parseInt(userinfo_user_fno);
        String filePath = "C:\\code_photo\\user_photo"; // 파일 저장 경로

        String fileId = (new Date().getTime() + "" + (new Random().ints(1000, 9999).findAny().getAsInt()));
        String originName = photo.getOriginalFilename();
        String fileExtension = originName.substring(originName.lastIndexOf(",") + 1);
        long fileSize = photo.getSize();

        File fileSave = new File(filePath, fileId + "." + fileExtension);
        if(!fileSave.exists()) {
            // 저장 경로 폴더 없을 시 생성
            fileSave.mkdirs();
        }
        dto.setUserinfo_user_fno(Integer.parseInt(userinfo_user_fno));
        dto.setUserinfo_photo(fileSave.toString());
        if(userInfoService.selectUserInfo(userFno) != null) {
            userInfoService.deleteUserInfo(userFno);
        }
        userInfoService.insertUserInfo(dto);
    }


}
