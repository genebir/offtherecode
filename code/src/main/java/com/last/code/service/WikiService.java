package com.last.code.service;

import com.last.code.model.WikiDTO;
import com.last.code.repository.WikiMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserDefinedFileAttributeView;
import java.util.List;

@Service

public class WikiService {
    @Autowired
    private WikiMapperRepository repository;

    // Select all
    public List<WikiDTO> WikiList() {
    return repository.wikiList();
    } // wikiList

    // Select one
    public WikiDTO wikiDetail(int wiki_pno) {
        return repository.wikiDetail();
    } // wikiDetail

    // Insert
    public void insertWiki(WikiDTO dto) {
        repository.insertWiki();
    } // insertWiki

    // Update
    public void updateWiki(WikiDTO dto) {
        repository.updateWiki();
    } // updateWiki

    // Delete
    public void deleteWiki(int wiki_pno) {
        repository.deleteWiki();
    } // deleteWiki
}
