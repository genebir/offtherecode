package com.last.code.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="userinfo")
public class UserInfoEntity {

    @OneToOne
    @JoinColumn(name="USER_INFO_FNO")
    private UserEntity userEntity;

}
