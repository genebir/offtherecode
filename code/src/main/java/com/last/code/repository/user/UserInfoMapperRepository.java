package com.last.code.repository.user;

import com.last.code.model.user.UserInfoDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserInfoMapperRepository {
    //    USERINFO_USER_FNO NUMBER(10) UNIQUE NOT NULL,
//    USERINFO_LANG VARCHAR(100),
//    USERINFO_PHOTO VARCHAR(200),
//    USERINFO_OTHER VARCHAR(500),
//    USERINFO_PHONE VARCHAR(13) UNIQUE,

    @Insert("insert into tbl_userinfo(userinfo_user_fno, userinfo_lang, userinfo_photo, userinfo_other, userinfo_phone) " +
            "values(#{userinfo_user_fno}, #{userinfo_lang}, #{userinfo_photo}, #{userinfo_other}, #{userinfo_phone})")
    int insertUserInfo(UserInfoDTO dto);

    @Select("select * from tbl_userinfo where userinfo_user_fno = #{userinfo_user_fno}")
    UserInfoDTO selectInfo(int userinfo_user_fno);

    @Delete("delete from tbl_userinfo where userinfo_user_fno = #{userinfo_user_fno}")
    int deleteUserInfo(int userinfo_user_fno);
}
