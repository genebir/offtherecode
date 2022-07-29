package com.last.code.controller;

import com.last.code.model.WikiDTO;
import com.last.code.service.WikiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("wiki")

public class WikiController {
    @Autowired
    private WikiService service;

    // Select all
    @GetMapping("/list")
    public List<WikiDTO> wikiList() {
        return service.WikiList();
} // wikiList

    // Select one
    @GetMapping("/detail")
    public WikiDTO wikiDetail(@RequestParam("wiki_pno") int wiki_pno) {
return service.wikiDetail(wiki_pno);
    } // wikiDetail

    // Insert
    @PostMapping("/insert")
    public int wikiInsert(@RequestBody WikiDTO dto) {
        return service.wikiInsert(dto);
    } // wikiInsert

    // Update
    @PostMapping("/update")
public int wikiUpdate(@RequestBody WikiDTO dto) {
return service.wikiUpdate(dto);
    } // wikiUpdate

    // Delete
    @GetMapping("/delete")
public int wikiDelete(@RequestParam("wiki_pno") int wiki_pno){
return service.WikiDelete(wiki_pno);
    } // wikiDelete

} // class