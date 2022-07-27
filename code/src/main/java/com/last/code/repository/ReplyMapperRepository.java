package com.last.code.repository;

import com.last.code.model.ReplyDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ReplyMapperRepository {

    @Select("select * from tbl_reply where reply_feed_fno = #{reply_feed_fno}")
    List<ReplyDTO> replyList(int reply_feed_fno);

    @Insert("insert into tbl_reply(reply_user_fno, reply_feed_fno, reply_content) values (#{reply_user_fno}, #{reply_feed_fno}, #{reply_content})")
    int writeReply(ReplyDTO dto);

    @Update("update tbl_reply set reply_content = #{reply_content} where reply_pno = #{reply_pno}")
    int updateReply(ReplyDTO dto);

    @Delete("delete from tbl_reply where reply_pno = #{reply_pno}")
    int deleteReply(int reply_pno);
}
