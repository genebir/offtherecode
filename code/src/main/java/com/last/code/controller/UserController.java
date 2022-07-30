package com.last.code.controller;

import com.last.code.model.UserDTO;
import com.last.code.security.TokenProvider;
import com.last.code.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
        UserDTO responseUserDTO = null;
        UserDTO userDTO = userService.signIn(dto);
        if(userDTO == null) {
            log.info("error");
        }
        if(userDTO != null) {
            log.info(userService.signIn(dto).toString());
            log.info(dto.toString());
            if(!userDTO.getUser_pw().equals(dto.getUser_pw())) {
              //  result = "비밀번호가 일치하지 않습니다.";
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
