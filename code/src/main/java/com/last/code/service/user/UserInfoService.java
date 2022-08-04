package com.last.code.service.user;

import com.last.code.model.user.UserInfoDTO;
import com.last.code.repository.user.UserInfoMapperRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserInfoService {

    @Autowired
    private UserInfoMapperRepository userInfoMapperRepository;

    public String insertUserInfo(UserInfoDTO dto) {
        String flag = "유저 상세정보 입력 실패";
        int cnt = userInfoMapperRepository.insertUserInfo(dto);
        if(cnt>0){
            flag = "유저 상세정보 입력 완료";
        }

        return flag;
    }

    public UserInfoDTO selectUserInfo(int userinfo_user_fno) {
        return userInfoMapperRepository.selectInfo(userinfo_user_fno);
    }

    public void deleteUserInfo(int userinfo_user_fno) {
        int cnt = userInfoMapperRepository.deleteUserInfo(userinfo_user_fno);

        if(cnt > 0) {
            log.info("유저 상세 정보 삭제 성공");
        } else {
            log.info("유저 상세 정보 삭제 실패");
        }
    }

}
