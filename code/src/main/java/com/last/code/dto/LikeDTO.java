package com.last.code.dto;

import com.last.code.model.FeedEntity;
import com.last.code.model.LikeEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikeDTO {

    private Long likePno;
    private FeedEntity likeFeedFno;
    private String[] likeIdList;

    public LikeDTO(LikeEntity ntt) {
        this.likePno = ntt.getLikePno();
        this.likeFeedFno = ntt.getLikeFeedFno();
        this.likeIdList = ntt.getLikeIdList().split(",");
    }


}
