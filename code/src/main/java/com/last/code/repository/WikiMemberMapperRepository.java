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
    @Insert("INSERT INTO TBL_WIKI_MEMBER(WIKI_MEMBER_PNO, WIKI_MEMBER_WIKI_FNO, WIKI_MEMBER_USER_FNO, WIKI_MEMBER_CONTENT) VALUES(#{WIKI_MEMBER_PNO}, #{WIKI_MEMBER_WIKI_FNO}, #{WIKI_MEMBER_USER_FNO}, #{WIKI_MEMBER_CONTENT})")
void insertWikiMember(WikiMemberDTO dto);

// Update
@Update("UPDATE TBL_WIKI_MEMBER SET WIKI_MEMBER_CONTENT = #{WIKI_MEMBER_CONTENT} WHERE WIKI_MEMBER_PNO = #{WIKI_MEMBER_PNO}")
    void updateWikiMember(WikiMemberDTO dto);

// Delete
    @Delete("DELETE FROM TBL_WIKI_MEMBER WHERE WIKI_MEMBER_PNO = #{WIKI_MEMBER_PNO}")
void deleteWikiMember(int wiki_member_pno);
}