package com.last.code.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.last.code.dto.ResponseDTO;
import com.last.code.dto.UserDTO;
import com.last.code.model.UserEntity;
import com.last.code.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("otc")
public class UserController {

	@Autowired
	private UserService service;

	@PostMapping("/signup")
	public ResponseEntity<?> createUser(@RequestBody UserDTO dto) {
		
		
		
		try {
			UserEntity entity = UserDTO.toEntity(dto);

			List<UserEntity> entities = service.create(entity);
			List<UserDTO> dtos = entities.stream().map(UserDTO::new).collect(Collectors.toList());
			ResponseDTO<UserDTO> response = ResponseDTO.<UserDTO>builder().data(dtos).build();

			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<UserDTO> response = ResponseDTO.<UserDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authentiicate(@RequestBody UserDTO dto) {
		UserEntity user = service.getByCredentiials(dto.getUserEmail(), dto.getUserPassword());

		if (user != null) {
			final UserDTO responseUserDTO = UserDTO.builder().userEmail(user.getUserEmail())
					.userNick(user.getUserNick()).userPhone(user.getUserPhone()).build();
			return ResponseEntity.ok().body(responseUserDTO);
		} else {
			ResponseDTO responseDTO = ResponseDTO.builder()
					.error("Login failed.")
					.build();
			return ResponseEntity
					.badRequest()
					.body(responseDTO);
		}
	}
}
