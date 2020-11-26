PRAGMA foreign_keys = ON;

CREATE TABLE groups(
  groupID INTEGER PRIMARY KEY,
  groupmate1 VARCHAR(18) NOT NULL,
  groupmate2 VARCHAR(18) NOT NULL,
  groupmate3 VARCHAR(18) NOT NULL,
  groupmate4 VARCHAR(18) NOT NULL,
  groupmate5 VARCHAR(18) NOT NULL,
  groupmate6 VARCHAR(18) NOT NULL,
  isOpen BOOLEAN NOT NULL,
  monday BOOLEAN NOT NULL,
  tuesday BOOLEAN NOT NULL,
  wednesday BOOLEAN NOT NULL,
  thursday BOOLEAN NOT NULL,
  friday BOOLEAN NOT NULL,
  saturday BOOLEAN NOT NULL,
  sunday BOOLEAN NOT NULL,
  timezone VARCHAR(18) NOT NULL,
  inPerson BOOLEAN NOT NULL,
  virtual BOOLEAN NOT NULL,
  async INTEGER NOT NULL,
  procast INTEGER NOT NULL,
  other VARCHAR(1024),
  teamname VARCHAR(1024)
);
