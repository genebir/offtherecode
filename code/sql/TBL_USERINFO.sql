drop table TBL_USERINFO;

create table TBL_USERINFO (
	USERINFO_USER_FNO number(10) unique not null,
	USERINFO_LANG varchar(100),
	USERINFO_POFOL varchar(100),
	USERINFO_PHOTO varchar(200),
	USERINFO_OTHER varchar(500),
	USERINFO_PHONE varchar(13) unique,
	constraint USERINFO_USER_FNO foreign key (USERINFO_USER_FNO) references TBL_USER(USER_PNO) on delete cascade
);

select * from TBL_USERINFO;

commit