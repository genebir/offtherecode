package com.last.code.repository.user;

import com.last.code.model.user.FollowDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface FollowMapperRepository {

//    FOLLOW_USER_FNO NUMBER(10) NOT NULL,
//    FOLLOW_FOLLOWING_FNO NUMBER(10) NOT NULL


    @Insert("insert into tbl_follow values(#{follow_user_fno}, #{follow_following_fno})")
    int following(FollowDTO dto);

    @Delete("delete from tbl_follow where follow_user_fno = #{follow_user_fno} and follow_following_fno = #{follow_following_fno}")
    int unfollowing(FollowDTO dto);

    @Select("select * from tbl_follow where follow_user_fno = #{follow_user_fno}")
    List<FollowDTO> followingList(int follow_user_fno);

    @Select("select * from tbl_follow where follow_following_fno = #{follow_following_fno}")
    List<FollowDTO> followerList(int follow_following_fno);

}
