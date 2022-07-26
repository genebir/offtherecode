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
        return repository.wikiDetail(wiki_pno);
    } // wikiDetail

    // Insert
    public int wikiInsert(WikiDTO dto) {
        return repository.wikiInsert(dto);
    } // wikiInsert

    // Update
    public int wikiUpdate(WikiDTO dto) {
        return repository.wikiUpdate(dto);
    } // wikiUpdate

    // Delete
    public int WikiDelete(int wiki_pno) {
       return repository.wikiDelete(wiki_pno);
    } // deleteWiki
}
