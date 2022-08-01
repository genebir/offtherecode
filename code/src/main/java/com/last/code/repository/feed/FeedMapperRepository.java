package com.last.code.repository.feed;

import com.last.code.model.feed.FeedDTO;
import org.apache.ibatis.annotations.*;

import java.util.HashMap;

@Mapper
public interface FeedMapperRepository {

    @Insert("insert into tbl_feed(feed_pno, feed_content, feed_user_fno, feed_file, feed_alt) values(seq_feed.nextval, #{feed_content}, #{feed_user_fno}, #{feed_file}, #{feed_alt})")
    int writeFeed(FeedDTO dto);


    @Delete("delete from tbl_feed where feed_pno = #{feed_pno}")
    int deleteFeed(int feed_pno);


//    @Select("select f.feed_pno, " +
//            "f.feed_content, " +
//            "f.feed_user_fno, " +
//            "f.feed_date," +
//            "r.reply_pno, " +
//            "r.reply_user_fno, " +
//            "r.reply_date, " +
//            "r.reply_feed_fno, " +
//            "r.reply_content, " +
//            "l.like_feed_fno, " +
//            "l.like_user_fno," +
//            "i.files_feed_fno, " +
//            "i.files_file, " +
//            "i.files_alt," +
//            "h.hashtag_feed_fno, " +
//            "h.hashtag_content" +
//            " from tbl_feed f " +
//            "join tbl_reply r " +
//            "on f.feed_pno = r.reply_feed_fno" +
//            "join tbl_like l " +
//            "on f.feed_pno = l.like_feed_fno" +
//            "join tbl_files i" +
//            "on f.feed_pno = i.files_feed_fno" +
//            "join tbl_hashtag h" +
//            "on f.feed_pno = h.hashtag_feed_fno" +
//            "where f.feed_pno = #{feed_pno}")
//    HashMap<String, Object> feedDetail(int feed_pno);


    @Select("select f.feed_pno, r.reply_content from tbl_feed f join tbl_reply r on f.feed_pno = r.reply_feed_fno where f.feed_pno = #{feed_pno}")
    HashMap<String, Object> test(int feed_pno);

    @Update("update tbl_feed set feed_content=#{feed_content}, feed_file=#{feed_file}, feed_alt=#{feed_alt} where feed_pno=#{feed_pno}")
    int updateFeed(FeedDTO dto);


}
