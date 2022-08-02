package com.last.code.model.feed;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikeDTO {

    private int like_feed_fno;
    private  int like_user_fno;
    private String like_user_nick;

}
