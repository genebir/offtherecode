drop table TBL_USER CASCADE CONSTRAINTS ;



create table TBL_USER (
	USER_PNO number(10) primary key,
	USER_EMAIL varchar(200) unique not null,
	USER_PW varchar(20) not null,
	USER_NICK varchar(30) unique not null
);

drop sequence seq_user;

create sequence seq_user 
	increment by 1 
	start with 1;
	
