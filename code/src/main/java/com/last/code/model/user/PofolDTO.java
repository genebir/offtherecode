package com.last.code.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PofolDTO {

    private int pofol_user_fno;
    private String pofol_content;

}
