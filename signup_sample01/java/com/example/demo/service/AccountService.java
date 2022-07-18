package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.domain.Account;
import com.example.demo.dto.AccountForm;
import com.example.demo.repository.AccountRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AccountService {
	
	@Autowired
	private final AccountRepository accountRepository;
	
	@Transactional
	public Long createUser(AccountForm form) {
		Account account = form.toEntity();
		accountRepository.save(account);
		return account.getId();
	}
}
