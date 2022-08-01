DROP TABLE TBL_FILES;

CREATE TABLE TBL_FILES(
    FILES_FEED_FNO NUMBER(10),
    FILES_FILE VARCHAR2(200),
    FILES_ALT VARCHAR2(200),

    CONSTRAINT FILES_FEED_FNO FOREIGN KEY (FILES_FEED_FNO) REFERENCES TBL_FEED(FEED_PNO) ON DELETE CASCADE
);

INSERT INTO TBL_FILES VALUES (1, 'TEST FILE', 'TEST ALT');
INSERT INTO TBL_FILES VALUES (1, 'TEST FILE', 'TEST ALT');
INSERT INTO TBL_FILES VALUES (1, 'TEST FILE', 'TEST ALT');

COMMIT