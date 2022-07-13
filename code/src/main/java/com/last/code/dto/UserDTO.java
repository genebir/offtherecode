package com.last.code.dto;

import com.last.code.model.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.springframework.context.annotation.Bean;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long userPno;
    private String userEmail;

    public UserDTO(UserEntity ntt) {
        this.userPno = ntt.getUserPno();
        this.userEmail = ntt.getUserEmail();
    }

    public static UserEntity toEntity(UserDTO dto) {
        return UserEntity.builder()
                .userPno(dto.getUserPno())
                .userEmail(dto.getUserEmail())
                .build();
    }
}
