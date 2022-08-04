package com.last.code.repository.user;

import com.last.code.model.user.UserDTO;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapperRepository {

    @Select("select * from tbl_user where user_pno = #{user_pno}")
    UserDTO userDetail(int user_pno);

    @Select("select * from tbl_user where user_email = #{user_email}")
    UserDTO signIn(String user_email);

    @Insert("insert into tbl_user(user_pno, user_email, user_pw, user_nick) values(seq_user.nextval, #{user_email}, #{user_pw}, #{user_nick})")
    int signUp(UserDTO dto);

    @Update("update tbl_user set user_pw=#{user_pw} where user_pno=#{user_pno}")
    int updatePw(UserDTO dto);

    @Update("update tbl_user set user_nick=#{user_nick} where user_pno=#{user_pno}")
    int updateNick(UserDTO dto);

    @Delete("delete from tbl_user where user_pno=#{user_pno}")
    int deleteUser(int user_pno);

    @Select("select * from tbl_user where user_nick=#{user_nick}")
    UserDTO selectByNick(String nick);
}
