package com.last.code.repository.feed;

import com.last.code.model.feed.HashtagDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface HashtagMapperRepository {

    @Select("select * from tbl_hashtag where hashtag_feed_fno = #{hashtag_feed_fno}")
    List<HashtagDTO> tagList(int hashtag_feed_fno);

    @Insert("insert into tbl_hashtag values(#{hashtag_feed_fno}, #{hashtag_content})")
    int writeTag(HashtagDTO dto);

    @Delete("delete from tbl_hashtag where hashtag_feed_fno = #{hashtag_feed_fno}")
    int deleteTag(int hashtag_feed_fno);

}
