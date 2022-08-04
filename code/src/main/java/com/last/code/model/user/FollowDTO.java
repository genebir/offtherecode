package com.last.code.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FollowDTO {

//    FOLLOW_USER_FNO NUMBER(10) NOT NULL,
//    FOLLOW_FOLLOWING_FNO NUMBER(10) NOT NULL,

    private int follow_user_fno;
    private int follow_following_fno;

}
