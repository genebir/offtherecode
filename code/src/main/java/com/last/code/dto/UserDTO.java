package com.last.code.dto;

import com.last.code.model.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	private Long userPno;
	private String userEmail;
	private String userPassword;
	private String userNick;
	private String userPhone;
	
	// 요청 바디를 넘겨받고 TodoEntity로 변환 후 저장.
	public UserDTO(final UserEntity entity) {
		this.userPno = entity.getUserPno();
		this.userEmail = entity.getUserEmail();
		this.userPassword = entity.getUserPassword();
		this.userNick = entity.getUserNick();
		this.userPhone = entity.getUserPhone();
	}

	public static UserEntity toEntity(UserDTO dto) {
		// 값을 입력받아 DB에 저장
		return UserEntity.builder()
				.userPno(dto.getUserPno())
				.userEmail(dto.getUserEmail())
				.userPassword(dto.getUserPassword())
				.userNick(dto.getUserNick())
				.userPhone(dto.getUserPhone())
				.build();
	}
}
