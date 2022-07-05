package com.last.code.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="TBL_USER")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="USER_PNO", length = 10)
    private Long user_pno;
    @Column(name="USER_EMAIL", length = 200)
    private String user_email;
    @Column(name = "USER_PW", length = 20)
    private String user_pw;
    @Column(name = "USER_NICK", length = 30)
    private String user_nick;
    @Column(name = "USER_PHONE", length = 13)
    private String user_phone;

}
