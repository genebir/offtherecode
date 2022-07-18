package com.example.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.dto.AccountForm;
import com.example.demo.service.AccountService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class UserController {
	
	
	private final AccountService accountService;
	
	@GetMapping("/loginUser")
	public String createUserForm(Model model) {
		model.addAttribute("userForm", new AccountForm());
		return "user/login/register";
	}
	
	@PostMapping("/loginUser")
	public String createUser(AccountForm form, BindingResult result) {
		if(result.hasErrors()) {
			return "user/login/register";
		}
		accountService.createUser(form);
		
		return "redirect:/";
	}
}
