package com.last.code.repository.feed;

import com.last.code.model.feed.LikeDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LikeMapperRepository {

    @Select("select * from tbl_like where like_feed_fno = #{like_feed_fno}")
    List<LikeDTO> likeUserList(int like_feed_pno);

    @Insert("insert into tbl_like values(#{like_feed_fno}, #{like_user_fno})")
    int likeFeed(LikeDTO dto);

    @Delete("delete from tbl_like where like_feed_fno = #{like_feed_fno} and like_user_fno = #{like_user_fno}")
    int unlikeFeed(LikeDTO dto);

}
