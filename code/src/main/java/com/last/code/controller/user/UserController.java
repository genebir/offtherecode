package com.last.code.controller.user;

import com.last.code.model.user.UserDTO;
import com.last.code.security.TokenProvider;
import com.last.code.service.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping("/signin")
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

}
