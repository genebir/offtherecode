package com.last.code.repository.feed;

import com.last.code.model.feed.FilesDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface FilesMapperRepository {
//    private int files_feed_fno;
//    private String files_file;
//    private String files_alt;

    @Insert("insert into tbl_files values(#{files_feed_fno}, #{files_file}, #{files_alt})")
    int addFiles(FilesDTO dto);

    @Select("select * from tbl_files where files_feed_fno = #{files_feed_fno}")
    List<FilesDTO> fileList(int files_feed_fno);

    @Delete("delete from tbl_files where files_feed_fno = #{files_feed_fno}")
    int deleteFiles(int files_feed_fno);

}
