package com.last.code.repository.feed;

import com.last.code.model.feed.FeedDTO;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.StatementType;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface FeedMapperRepository {


    @SelectKey(statement = "select seq_feed.currval from dual", resultType = int.class, before = false, keyProperty = "feed_pno")
    @Insert("insert into tbl_feed(feed_pno, feed_content, feed_user_fno) values(seq_feed.nextval, #{feed_content}, #{feed_user_fno})")
    int writeFeed(FeedDTO dto);


    @Delete("delete from tbl_feed where feed_pno = #{feed_pno}")
    int deleteFeed(int feed_pno);

    @Select("select feed_pno from where feed_user_fno = #{feed_user_fno} and (to_char(feed_date, 'yyyymmdd') = to_char(sysdate, 'yyyymmdd') or to_char(feed_date, 'yyyymmdd') = to_char(sysdate-1, 'yyyymmdd')")
    List<Integer> selectByUserFnoTwoDays(int feed_user_fno); // 어제 오늘 날짜의 피드의 pno만 가져옴

    @Select("select feed_pno from where feed_user_fno = #{feed_user_fno}")
    List<Integer> selectByUserFno(int feed_user_fno); // pno가져오기

    @Select("select * from tbl_feed where feed_pno = #{feed_pno})")
    FeedDTO feedDetail(int feed_pno);

    @Update("update tbl_feed set feed_content=#{feed_content}, feed_file=#{feed_file}, feed_alt=#{feed_alt} where feed_pno=#{feed_pno}")
    int updateFeed(FeedDTO dto);


}
