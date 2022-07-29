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

public class WikiMemberDTO {
private int wiki_member_pno;
private int wiki_member_wiki_fno;
private int wiki_member_user_fno;
private String wiki_member_content;
private LocalDate wiki_member_date;
}
