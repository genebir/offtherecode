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
@Table(name="TBL_LIKE")
public class LikeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "LIKE_PNO")
    private Long likePno;
    @OneToOne(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name="LIKE_FEED_FNO")
    private FeedEntity likeFeedFno;
    @Column(name = "LIKE_ID_LIST", length = 2000)
    private String likeIdList;

}
