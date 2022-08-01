package com.last.code.service.feed;

import com.last.code.model.feed.FilesDTO;
import com.last.code.repository.feed.FilesMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilesService {

    @Autowired
    private FilesMapperRepository filesMapperRepository;

    public void insertFiles(List<FilesDTO> fileList) {
        for(FilesDTO dto : fileList) {
            filesMapperRepository.addFiles(dto);
        }
    }

    public void updateFiles(List<FilesDTO> fileList) {
        int del = filesMapperRepository.deleteFiles(fileList.get(0).getFiles_feed_fno());

        if(del>0) {
            for(FilesDTO dto : fileList) {
                filesMapperRepository.addFiles(dto);
            }
        }
    }

    public List<FilesDTO> files(int files_feed_fno) {
        return filesMapperRepository.fileList(files_feed_fno);
    }

}
