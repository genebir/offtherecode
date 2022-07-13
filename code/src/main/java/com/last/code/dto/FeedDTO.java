package com.last.code.dto;

import com.last.code.model.FeedEntity;
import com.last.code.model.LikeEntity;
import com.last.code.model.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FeedDTO {

    private Long feedPno;
    private String feedContent;
    private UserEntity feedUserFno;
    private String feedFile;
    private String feedAlt;
    private LocalDate feedDate;
   // private LikeEntity feedLikeFno;

    public FeedDTO(FeedEntity ntt) {
        this.feedPno = ntt.getFeedPno();
        this.feedContent = ntt.getFeedContent();
        this.feedUserFno = ntt.getFeedUserFno();
        this.feedFile = ntt.getFeedFile();
        this.feedAlt = ntt.getFeedAlt();
        this.feedDate = ntt.getFeedDate();
    }

    public FeedEntity toEntity(FeedDTO dto) {
        return FeedEntity.builder().feedPno(dto.getFeedPno()).
                feedContent(dto.getFeedContent()).
                feedUserFno(dto.getFeedUserFno()).
                feedFile(dto.getFeedFile()).
                feedAlt(dto.getFeedAlt()).
                build();
    }

}
