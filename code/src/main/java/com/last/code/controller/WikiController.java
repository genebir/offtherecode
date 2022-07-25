package com.last.code.controller;

import com.last.code.model.WikiDTO;
import com.last.code.service.WikiService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return WikiList;
    } // select all

} // wikiList

    // Select one
    @GetMapping("/detail")
    public WikiDTO detailWiki(int wiki_pno) {

    } // detailWiki

    // Insert
    @GetMapping("/insert")
public int insertWiki(WikiDTO dto) {

    } // insert

    // Update
    @GetMapping("/update")
public int updateWiki(WikiDTO dto) {

    } // update

    // Delete
    @GetMapping("/delete")
public int deleteWiki(@RequestBody int wiki_pno){

    } // deleteWiki

} // class