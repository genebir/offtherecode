package com.last.code.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedDTO {

    private int feed_pno;
    private String feed_content;
    private int feed_user_fno;
    private LocalDate feed_date;
    private String feed_file;
    private String feed_alt;

}
