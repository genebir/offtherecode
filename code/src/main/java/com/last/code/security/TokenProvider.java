package com.last.code.security;

import com.last.code.model.UserDTO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
public class TokenProvider {
// 토큰 만들어주는 애
    private static final Key key = Keys.hmacShaKeyFor("오프더레코드최고의프로젝트입니다모두모두화이팅".getBytes(StandardCharsets.UTF_8));

    public String create(UserDTO dto) {
        Date expiryDate = Date.from( // 만료시간 설정
                Instant.now().plus(1, ChronoUnit.DAYS)
        );

        return Jwts.builder()
                .signWith(key, SignatureAlgorithm.HS512)
                .setSubject(dto.getUser_pno() + "")
                .setIssuer("OffTheRecode")
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .compact();
    }

    public String validateAndGetUserPno(String token) {

        String subj = "";

        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            subj = claims.getSubject();
        } catch (Exception e) {
            subj = "위조 토큰";
        }

        return subj;
    }

}
