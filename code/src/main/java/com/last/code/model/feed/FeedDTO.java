package com.last.code.model.feed;


import com.last.code.service.user.UserService;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedDTO {

    private int feed_pno;
    private String feed_content;
    private int feed_user_fno;
    private LocalDate feed_date;
    private String feed_user_nick;
    private List<FilesDTO> files;
    private List<LikeDTO> likes;
    private List<ReplyDTO> reply;
    private List<HashtagDTO> hashtags;

}
