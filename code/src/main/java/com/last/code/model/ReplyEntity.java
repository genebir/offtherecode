package com.last.code.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="TBL_REPLY")
@EntityListeners(AuditingEntityListener.class)
public class ReplyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="REPLY_PNO")
    private Long replyPno;
    @ManyToOne(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    @JoinColumn(name = "REPLY_FEED_FNO", nullable = false)
    private FeedEntity replyFeedFno;
    @ManyToOne(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    @JoinColumn(name = "REPLY_USER_FNO", nullable = false)
    private UserEntity replyUserFno;
    @Column(name = "REPLY_DATE", nullable = false)
    @CreatedDate
    private LocalDate replyDate;
    @Column(name = "REPLY_CONTENT", nullable = false)
    private String replyContent;

}
