package com.last.code.model.feed;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilesDTO {

    private int files_feed_fno;
    private String files_file;
    private String files_alt;

}
