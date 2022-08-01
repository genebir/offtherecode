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

    public String signUp(UserDTO dto) {
        int cnt = userMapperRepository.signUp(dto);
        String flag = "false";

        if(cnt > 0) {
            flag = "signUp >>>>>>>>>>>>>>>>>>>>>>>";
        }
        return flag;
    }

    public String selectUserNick(int user_pno) {
        UserDTO dto = userMapperRepository.userDetail(user_pno);
        String userNick = dto.getUser_nick();
        return userNick;
    }

}
