CREATE TABLE `employees` (
  `row_key` INT NOT NULL AUTO_INCREMENT,
  `guid` VARCHAR(100) UNIQUE,
  `username` VARCHAR(100) NULL,
  `name` VARCHAR(100) NULL, 
  `email` VARCHAR(100) NULL,
  `position` VARCHAR(100) NULL,
  `role` VARCHAR(100) NULL, 

  PRIMARY KEY (`row_key`));


INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('691A07B2-3988-4C2D-93EC-34E8F96B8AFA', 'alovlace', 'Ada Lovelace', 'alovlace@devdynasty.com', 'Business Analyst', 'Employee');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('2A825571-DFF9-4F6B-9D95-F90AD5B1141E', 'aturing', 'Alan Turing', 'aturing@devdynasty.com', 'Software Engineer', 'Employee');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('6437E537-736F-41F8-A2B4-8F7FBFA8E9A3', 'dritchie', 'Dennis Ritchie', 'dritchie@devdynasty.com', 'Accountant', 'Employee');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('A3B1CF3C-792B-4BDA-8EAE-CF740CBC1102', 'ghopper', 'Grace Hopper', 'ghopper@devedynasty.com', 'Technical Lead', 'Manager');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VAlUES ('41339083-CC13-4064-8818-49A6580E0BB5', 'lpage', 'Larry Page', 'lpage@devdynasty.com', 'Project Manager', 'Manager');