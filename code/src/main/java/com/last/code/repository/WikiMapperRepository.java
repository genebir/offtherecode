package com.last.code.repository;

import com.last.code.model.WikiDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper

public interface WikiMapperRepository {
    // Select all
@Select("select * from tbl_wiki")
    List<WikiDTO> wikiList();

// Select one
@Select("select * from tbl_wiki where wiki_pno = #{wiki_pno}")
WikiDTO wikiDetail(int wiki_pno);

// Insert
@Insert("insert into tbl_wiki(wiki_pno, wiki_user_fno, wiki_content, wiki_code, wiki_lang) values(seq_wiki_next.val, #{wiki_user_fno}, #{wiki_content}, #{ewiki_code}, #{wiki_lang})")
    int wikiInsert(WikiDTO dto);

// Update
    @Update("update tbl_wiki set wiki_content = #{wiki_content}, wiki_code = #{wiki_code}, wiki_lang = #{wiki_lang} where wiki_pno = #{wiki_pno}")
    int wikiUpdate(WikiDTO dto);

    // Delete
    @Delete("delete from tbl_wiki where wiki_pno = #{wiki_pno}")
    int wikiDelete(int wiki_pno);
}
