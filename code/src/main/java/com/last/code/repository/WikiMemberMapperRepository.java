package com.last.code.repository;

import com.last.code.model.WikiMemberDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper

public interface WikiMemberMapperRepository {
    // Select all
    @Select("SELECT * FROM TBL_WIKI_MEMBER")
    List<WikiMemberDTO> wikiMemberList();

    // Select one
    @Select("SELECT * FROM TBL_WIKI_MEMBER WHERE WIKI_MEMBER_PNO = #{WIKI_MEMBER_PNO}")
    WikiMemberDTO wikiMemberDetail(int wiki_member_pno);

    // Insert
    @Insert("insert into tbl_wiki_member(wiki_member_pno, wiki_member_wiki_fno, wiki_member_user_fno, wiki_member_content) values(seq_wiki_member.nextval, #{wiki_member_wiki_fno}, #{wiki_member_user_fno}, #{wiki_member_content})")
int wikiMemberInsert(WikiMemberDTO dto);

// Update
@Update("update tbl_wiki_member set wiki_member_content = #{wiki_member_content} where wiki_member_pno = #{wiki_member_pno}")
    int wikiMemberUpdate(WikiMemberDTO dto);

// Delete
    @Delete("delete from tbl_wiki_member where wiki_member_pno = #{wiki_member_pno}")
int wikiMemberDelete(int wiki_member_pno);

}