package com.last.code.repository.feed;

import com.last.code.model.feed.FilesDTO;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface FilesMapperRepository {
//    private int files_feed_fno;
//    private String files_file;


    @Insert("insert into tbl_files values(#{feedno}, #{files_file})")
    int addFiles(FilesDTO dto);

    @Select("select * from tbl_files where files_feed_fno = #{files_feed_fno}")
    List<FilesDTO> fileList(int files_feed_fno);

    @Delete("delete from tbl_files where files_feed_fno = #{files_feed_fno}")
    int deleteFiles(int files_feed_fno);

}
