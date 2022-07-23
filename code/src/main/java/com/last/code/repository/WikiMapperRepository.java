package com.last.code.repository;

import com.last.code.model.WikiDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper

public interface WikiMapperRepository {
    // Select all
@Select("SELECT * FROM TBL_WIKI")
    List<WikiDTO> wikiList();

// Select one
@Select("SELECT * FROM TBL_WIKI WHERE WIKI_PNO = #{WIKI_PNO}")
WikiDTO wikiDetail(int wiki_pno);

// Insert
@Insert("INSERT INTO TBL_WIKI(WIKI_PNO, WIKI_USER_FNO, WIKI_CONTENT, WIKI_LANG) VALUES(#{WIKI_PNO}, #{WIKI_USER_FNO}, #{WIKI_CONTENT}, #{WIKI_LANG})")
    void insertWiki(WikiDTO dto);

// Update
    @Update("UPDATE TBL_WIKI SET WIKI_CONTENT = #{WIKI_CONTENT}, WIKI_LANG = #{WIKI_LANG} WHERE WIKI_PNO = #{WIKI_PNO}")
    void updateWiki(WikiDTO dto);

    // Delete
    @Delete("DELETE FROM TBL_WIKI WHERE WIKI_PNO = #{WIKI_PNO}")
    void deleteWiki(int wiki_pno);
}
