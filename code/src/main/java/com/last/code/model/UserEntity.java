package com.last.code.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="user")
public class UserEntity {
	@Id
	@Column(name = "USER_PNO", unique=true)
    @GeneratedValue(strategy = GenerationType.AUTO)
	@NotNull
	private Long userPno;
	
	@Column(name = "USER_EMAIL", length = 200, unique=true)
	@NotNull
	private String userEmail;
	
	@Column(name = "USER_PASSWORD", length = 20)
	@NotNull
	private String userPW;
	
	@Column(name = "USER_NICK", length = 30, unique=true)
	@NotNull
	private String userNick;
	
	@Column(name = "USER_PHONE", length = 13, unique=true)
	private String userPhone;
}
