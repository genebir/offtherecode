package com.last.code.repository.user;

import com.last.code.model.user.PofolDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PofolMapperRepository {

    @Insert("insert into tbl_pofol values(#{pofol_user_fno}, #{pofol_content})")
    int insertPofol(PofolDTO dto);

    @Select("select * from tbl_pofol where pofol_user_fno = #{pofol_user_fno}")
    List<PofolDTO> pofolList(int pofol_user_fno);

    @Delete("delete from tbl_pofol where pofol_user_fno = #{pofol_user_fno}")
    int deletePofol(int pofol_user_fno);

}
