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

public class WikiDTO {

    private int wiki_pno;
    private int wiki_user_fno;
    private String wiki_title;
    private String wiki_content;
    private String wiki_code;
    private String wiki_lang;
    private LocalDate wiki_com_date;

}
