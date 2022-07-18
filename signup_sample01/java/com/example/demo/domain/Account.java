package com.example.demo.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="tbl_user")
public class Account {
	@Id @Column(name = "user_id")
    // SQL 에서 자동생성되도록 돕는 어노테이션
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Column(name = "user_name")
    private String name;
	
	@Column(name = "user_password")
    private String password;
	
	@Column(name = "user_email")
    private String email;
	
	@Column(name = "user_age")
    private String age;
	
	@Column(name = "user_role")
    private String role;

    @Builder
    public Account(Long id, String name, String password, String email, String age, String role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.age = age;
        this.role = role;
    }

}
