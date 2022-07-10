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
@Table(name="like")
public class LikeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @OneToOne
    private FeedEntity feedEntity;
    @Column(name = "LIKE_ID_LIST", length = 2000)
    private String likeIdList;

}
