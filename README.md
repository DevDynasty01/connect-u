# ConnectU - A Task Manager Portal 

Clients are facing decreased productivity. They need a centralized solution to manage tasks. 

ConnectU gives managers and employees a centralized place where managers can delegate tasks to their employees and employees can easily view what tasks are assigned increasing productivity. 

To launch this application: 

1. Clone this repo
2. npm i
3. create two mySQL database with the following commands: 

for the 1st one: 

CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guid` varchar(45) DEFAULT NULL,
  `task` longtext,
  `status` varchar(45) DEFAULT NULL,
  `due_date` varchar(45) DEFAULT NULL,
  `date_assigned` varchar(45) DEFAULT NULL,
  `assigned_from` varchar(45) DEFAULT NULL COMMENT 'Use the id of the user who assigned it.',
  `assigned_to` varchar(45) DEFAULT NULL COMMENT 'Use the id of the user it was assigned to ',

  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from, assigned_to) VALUES ('691A07B2-3988-4C2D-93EC-34E8F96B8AFA', 'New Hire orientation', 'in-progress', '2023-06-14', '2023-06-21', 'ghopper', 'alovelace');
INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from, assigned_to) VALUES ('2A825571-DFF9-4F6B-9D95-F90AD5B1141E', 'Meeting with Pepsi', 'in-progress', '2023-06-18', '2023-06-20',  'ghopper', 'aturing');


for the 2nd one: 


CREATE TABLE `employees` (
  `row_key` INT NOT NULL AUTO_INCREMENT,
  `guid` VARCHAR(100) UNIQUE,
  `username` VARCHAR(100) NULL,
  `name` VARCHAR(100) NULL, 
  `email` VARCHAR(100) NULL,
  `position` VARCHAR(100) NULL,
  `role` VARCHAR(100) NULL,
  `profile_pic` VARCHAR(50) NULL
  PRIMARY KEY (`row_key`));

 


INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('691A07B2-3988-4C2D-93EC-34E8F96B8AFA', 'alovlace', 'Ada Lovelace', 'alovlace@devdynasty.com', 'Business Analyst', 'Employee', 'ada-lovelace.jpeg');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('2A825571-DFF9-4F6B-9D95-F90AD5B1141E', 'aturing', 'Alan Turing', 'aturing@devdynasty.com', 'Software Engineer', 'Employee', 'alan-turing.jpg');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('6437E537-736F-41F8-A2B4-8F7FBFA8E9A3', 'dritchie', 'Dennis Ritchie', 'dritchie@devdynasty.com', 'Accountant', 'Employee', 'dennis-ritchie.jpg');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VALUES ('A3B1CF3C-792B-4BDA-8EAE-CF740CBC1102', 'ghopper', 'Grace Hopper', 'ghopper@devedynasty.com', 'Technical Lead', 'Employee', 'grace-hopper.jpeg');
INSERT INTO employees (guid, username, `name`, email, position, `role`) VAlUES ('41339083-CC13-4064-8818-49A6580E0BB5', 'lpage', 'Larry Page', 'lpage@devdynasty.com', 'Project Manager', 'Manager', 'larry-page.jpg');

4. Try it out!
  To test the app as a manager user use:  
  email: ghopper@devedynasty.com 
  password: 123456


  To test the app as an employee user use: 

  email: alovelace@devdynasty.com
  password:123456

