package com.example.demo.dto;

import com.example.demo.domain.Account;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AccountForm {
	private Long id;
	private String name;
	private String password;
	private String email;
	private String age;
	private String role;
	
	@Builder
	public AccountForm(Long id, String name, String password, String email, String age, String role) {
	    this.id = id;
	    this.name = name;
	    this.password = password;
	    this.email = email;
	    this.age = age;
	    this.role = role;
	}

    public Account toEntity(){
    	return Account.builder()
			.id(id)
			.name(name)
			.password(password)
			.email(email)
			.age(age)
			.role(role)
			.build();
    		//	                .password(new BCryptPasswordEncoder().encode(password))

    }
}
