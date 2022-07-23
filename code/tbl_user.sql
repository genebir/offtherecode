drop table TBL_USER;

drop sequence seq_user;

create table TBL_USER (
	USER_PNO number(10) primary key,
	USER_EMAIL varchar(200) unique not null,
	USER_PW varchar(20) not null,
	USER_NICK varchar(30) unique not null
);

create sequence seq_user 
	increment by 1 
	start with 1;
	
insert into TBL_USER(USER_PNO, USER_EMAIL, USER_PW, USER_NICK) values(seq_user.nextval, 'jjkk1@naver.com', '0011', 'jkm');
insert into TBL_USER(USER_PNO, USER_EMAIL, USER_PW, USER_NICK) values(seq_user.nextval, 'jjkk2@naver.com', '0012', 'jkm2');
insert into TBL_USER(USER_PNO, USER_EMAIL, USER_PW, USER_NICK) values(seq_user.nextval, 'jjkk3@naver.com', '0013', 'jkm3');

select * from TBL_USER;

commit