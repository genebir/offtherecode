package com.last.code.controller;

import com.last.code.dto.UserDTO;
import com.last.code.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@Slf4j
@RequestMapping(value = "user")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping(value = "/add")
    public void addUser(@RequestParam("userEmail") String email) {
        service.addUser(new UserDTO(null, email));
    }

}
