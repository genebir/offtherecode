package com.last.code.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.last.code.dto.UserDTO;
import com.last.code.model.UserEntity;
import com.last.code.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public class UserService {
	
	@Autowired
	private UserRepository repository;

	public List<UserEntity> create(final UserEntity entity) {
		repository.save(entity);
		log.info("Entity Email : {} is saved.", entity.getUserEmail());
		return repository.findByUserEmail(entity.getUserEmail());
	}
	
	public UserEntity getByCredentiials(final String userEmail, final String userPassword) {
		return repository.findByUserEmailAndUserPassword(userEmail, userPassword);
	}
	
	public boolean checkEmail(String userEmail) {
		return repository.existsByUserEmail(userEmail);
	}
	
	public boolean checkNick(String userNick) {
		return repository.existsByUserNick(userNick);
	}
}
