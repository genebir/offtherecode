package com.last.code.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoDTO {

//    USERINFO_USER_FNO NUMBER(10) UNIQUE NOT NULL,
//    USERINFO_LANG VARCHAR(100),
//    USERINFO_PHOTO VARCHAR(200),
//    USERINFO_OTHER VARCHAR(500),
//    USERINFO_PHONE VARCHAR(13) UNIQUE,

    private int userinfo_user_fno;
    private String userinfo_lang;
    private String userinfo_photo;
    private String userinfo_other;
    private String userinfo_phone;
    private List<PofolDTO> pofols;

}
