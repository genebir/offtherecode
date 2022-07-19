package com.last.code.repository;

import com.last.code.model.UserEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
//	List<UserEntity> findByUserEmail(String userEamil);
	List<UserEntity> findByUserEmail(String userEmail);
	
}
