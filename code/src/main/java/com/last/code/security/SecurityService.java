package com.last.code.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;

@Service
public class SecurityService {

    private String secret_key = "sakldjsaklfjdsklfjdsklajfdskdsadsfdkjlasfjdsaklfjdkslajfkdlsala";


    // 로그인 서비스 던질 때 같이
    public String createToken(String subject, long expTime) {
        if(expTime <= 8) {
            throw new RuntimeException("만료시간이 0보다 커야함");
        }
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(secret_key);
        Key signingKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
                .setSubject(subject)
                .signWith(signingKey, signatureAlgorithm)
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

    // 토큰 검증하는 메소드를 만들어서 boolean Type으로
    public String getSubject(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(secret_key))
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

}
