package com.last.code.controller;

import com.last.code.model.WikiMemberDTO;
import com.last.code.service.WikiMemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("wikiMember")

public class WikiMemberController {
    @Autowired
    private WikiMemberService service;

// Select all
    @GetMapping("/list")
    public List<WikiMemberDTO> wikiMemberList() {
        return service.wikiMemberList();
    } // wikiMemberList

    // Select one
    @GetMapping("/detail")
    public WikiMemberDTO wikiMemberDetail(@RequestParam("wiki_member_pno") int wiki_member_pno) {
        return service.wikiMemberDetail(wiki_member_pno);
    } // wikiMemberDetail

    // Insert
    @PostMapping("/insert")
public int wikiMemberInsert(@RequestBody WikiMemberDTO dto) {
        return service.wikiMemberInsert(dto);
    } // wikiMemberInsert

    // Update
    @PostMapping("/update")
    public int wikiMemberUpdate(@RequestBody WikiMemberDTO dto) {
        return service.wikiMemberUpdate(dto);
    } // wikiMemberUpdate

    // Delete
    @GetMapping("/delete")
    public int wikiMemberDelete(@RequestParam("wiki_member_pno") int wiki_member_pno) {
        return service.wikiMemberDelete(wiki_member_pno);
    } // wikiMemberDelete

} // class