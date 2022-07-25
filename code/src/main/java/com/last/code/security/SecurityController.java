package com.last.code.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("security")
public class SecurityController {

    @Autowired
    private SecurityService service;

    @GetMapping("/create")
    public Map<String, Object> createToken(@RequestParam("subject") String subject) {
        String token = service.createToken(subject, (2*1000*60));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("result", token);
        return map;
    }

    @GetMapping("/read")
    public Map<String, Object> getSubject(@RequestParam("token") String token) {
        String subject = service.getSubject(token);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("result", subject);
        return map;
    }
}
