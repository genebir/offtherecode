package com.last.code.repository;

import com.last.code.model.UserDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapperRepository {


    @Select("select * from tbl_user where user_email = #{user_email}")
    UserDTO signIn(String user_email);

}
