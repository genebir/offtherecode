package com.last.code.dto;

import com.last.code.model.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
	private Long userPno;
	private String userEmail;
	private String userPW;
	private String userNick;
	private String userPhone;
	
	public UserDTO(final UserEntity entity) {
		this.userPno = entity.getUserPno();
		this.userEmail = entity.getUserEmail();
		this.userPW = entity.getUserPW();
		this.userNick = entity.getUserNick();
		this.userPhone = entity.getUserPhone();
	}
	
	public UserEntity toEntity(UserDTO dto) {
		return UserEntity.builder()
				.userPno(dto.getUserPno())
				.userEmail(dto.getUserEmail())
				.userPW(dto.getUserPW())
				.userNick(dto.getUserNick())
				.userPhone(dto.getUserPhone())
				.build();
	}	
}
