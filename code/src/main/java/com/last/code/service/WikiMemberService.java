package com.last.code.service;

import com.last.code.model.WikiMemberDTO;
import com.last.code.repository.WikiMemberMapperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class WikiMemberService {
    @Autowired
    private WikiMemberMapperRepository repository;

    // Select all
    public List<WikiMemberDTO> wikiMemberList() {
        return repository.wikiMemberList();
    } // wikiMemberList

    // Select one
    public WikiMemberDTO wikiMemberDetail(int wiki_member_pno) {
        return repository.wikiMemberDetail(wiki_member_pno);
    } // wikiMemberDetail

    // Insert
    public int wikiMemberInsert(WikiMemberDTO dto) {
        return repository.wikiMemberInsert(dto);
    } // wikiMemberInsert

    // Update
    public int wikiMemberUpdate(WikiMemberDTO dto) {
        return repository.wikiMemberUpdate(dto);
    } // wikiMemberUpdate

    // Delete
    public int wikiMemberDelete(int wiki_member_pno) {
        return repository.wikiMemberDelete(wiki_member_pno);
    } // wikiMemberDelete


} // class
