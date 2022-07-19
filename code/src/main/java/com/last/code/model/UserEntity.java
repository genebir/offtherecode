package com.last.code.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="TAB_USER")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "USER_PNO", unique=true, nullable = false)
	private Long userPno;
	
	@Column(name = "USER_EMAIL", length = 200, unique=true, nullable = false)
	private String userEmail;
	
	@Column(name = "USER_PASSWORD", length = 20, nullable = false)
	private String userPassword;
	
	@Column(name = "USER_NICK", length = 30, unique=true, nullable = false)
	private String userNick;
	
	@Column(name = "USER_PHONE", length = 13, unique=true)
	private String userPhone;
	
}
