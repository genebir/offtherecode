package com.last.code.repository;

import com.last.code.model.FeedDTO;
import org.apache.ibatis.annotations.*;

@Mapper
public interface FeedMapperRepository {

    @Insert("insert into tbl_feed(feed_pno, feed_content, feed_user_fno, feed_file, feed_alt) values(seq_feed.nextval, #{feed_content}, #{feed_user_fno}, #{feed_file}, #{feed_alt})")
    int writeFeed(FeedDTO dto);


    @Delete("delete from tbl_feed where feed_pno = #{feed_pno}")
    int deleteFeed(int feed_pno);

    @Select("select * from tbl_feed where feed_pno = #{feed_pno}")
    FeedDTO feedDetail(int feed_pno);

    @Update("update tbl_feed set feed_content=#{feed_content}, feed_file=#{feed_file}, feed_alt=#{feed_alt} where feed_pno=#{feed_pno}")
    int updateFeed(FeedDTO dto);


}
