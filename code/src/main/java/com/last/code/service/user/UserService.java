package com.last.code.service.user;

import com.last.code.model.user.UserDTO;
import com.last.code.repository.user.UserMapperRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserMapperRepository userMapperRepository;

    public UserDTO signIn(UserDTO dto) {
        return userMapperRepository.signIn(dto.getUser_email());
    }

    public UserDTO userDetail(int user_pno) {
        return userMapperRepository.userDetail(user_pno);
    }

    public void signUp(UserDTO dto) {
        int cnt = userMapperRepository.signUp(dto);
        String flag = "회원가입 실패";

        log.info(cnt + "");
        if(cnt > 0) {
            flag = "회원가입 완료";
        }
        log.info(flag);
    }

    public String selectUserNick(int user_pno) {
        UserDTO dto = userMapperRepository.userDetail(user_pno);
        String userNick = dto.getUser_nick();
        return userNick;
    }

    public UserDTO selectByNick(String user_nick) {
        return userMapperRepository.selectByNick(user_nick);
    }

    public void updatePw(UserDTO dto) {
        int cnt = userMapperRepository.updatePw(dto);

        if(cnt > 0){
            log.info("수정 완료");
        } else {
            log.info("수정 오류");
        }
    }

    public void deleteUser(int user_pno) {
        int cnt = userMapperRepository.deleteUser(user_pno);
        if(cnt>0) {
            log.info("탈퇴 완료");
        } else {
            log.info("탈퇴 오류 발생");
        }
    }

}
