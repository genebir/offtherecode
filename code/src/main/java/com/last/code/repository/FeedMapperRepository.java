package com.last.code.repository;

import com.last.code.model.FeedDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface FeedMapperRepository {

    @Insert("insert into tbl_feed(feed_pno, feed_content, feed_user_fno, feed_file, feed_alt) values(seq_feed.nextval, #{feed_content}, #{feed_user_fno}, #{feed_file}, #{feed_alt})")
    void writeFeed(FeedDTO dto);


    @Delete("delete from tbl_feed where feed_pno = #{feed_pno}")
    void deleteFeed(int feed_pno);

    @Select("select * from tbl_feed where feed_pno = #{feed_pno}")
    FeedDTO feedDetail(int feed_pno);


}
