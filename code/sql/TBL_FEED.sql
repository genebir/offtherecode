DROP TABLE TBL_FEED CASCADE CONSTRAINTS ;

CREATE TABLE TBL_FEED(
    FEED_PNO NUMBER(10) PRIMARY KEY,
    FEED_CONTENT VARCHAR2(1000) NOT NULL ,
    FEED_USER_FNO NUMBER(10) NOT NULL ,
    FEED_DATE DATE DEFAULT SYSDATE,
    FEED_FILE VARCHAR2(300),
    FEED_ALT VARCHAR2(200),

    CONSTRAINT FEED_USER_FNO FOREIGN KEY (FEED_USER_FNO) REFERENCES TBL_USER(USER_PNO) ON DELETE CASCADE
);

DROP SEQUENCE SEQ_FEED;

CREATE SEQUENCE SEQ_FEED START WITH 1 INCREMENT BY 1;