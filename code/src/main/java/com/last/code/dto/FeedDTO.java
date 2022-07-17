package com.last.code.dto;

import com.last.code.model.FeedEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FeedDTO {

    private Long feedPno;
    private String feedContent;
    private String feedFile;
    private String feedAlt;
    private LocalDate feedDate;
   // private LikeEntity feedLikeFno;

    public FeedDTO(FeedEntity ntt) {
        this.feedPno = ntt.getFeedPno();
        this.feedContent = ntt.getFeedContent();
        this.feedFile = ntt.getFeedFile();
        this.feedAlt = ntt.getFeedAlt();
        this.feedDate = ntt.getFeedDate();
    }

    public FeedEntity toEntity(FeedDTO dto) {
        return FeedEntity.builder().feedPno(dto.getFeedPno()).
                feedContent(dto.getFeedContent()).
                feedFile(dto.getFeedFile()).
                feedAlt(dto.getFeedAlt()).
                build();
    }

}
