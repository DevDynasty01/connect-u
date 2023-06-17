CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `guid` varchar(45) DEFAULT NULL,
  `task` longtext,
  `status` varchar(45) DEFAULT NULL,
  `due_date` varchar(45) DEFAULT NULL,
  `date_assigned` varchar(45) DEFAULT NULL,
  `assigned_from` varchar(45) DEFAULT NULL COMMENT 'Use the id of the user who assigned it.',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from) VALUES ('691A07B2-3988-4C2D-93EC-34E8F96B8AFA', 'New Hire orientation', 'in-progress', '2023-06-14', '2023-06-21', 'bgates');
INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from) VALUES ('2A825571-DFF9-4F6B-9D95-F90AD5B1141E', 'Meeting with Pepsi', 'in-progress', '2023-06-18', '2023-06-20',  'bgates');
INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from) VALUES ('6437E537-736F-41F8-A2B4-8F7FBFA8E9A3', 'One-on-one with coach','done', '2023-06-15', '2023-06-16',  'bgates');
INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from) VALUES ('A3B1CF3C-792B-4BDA-8EAE-CF740CBC1102', 'Meeting Prioritizing Features', 'in-progress', '2023-06-25', '2023-06-30', 'bgates');
INSERT INTO tasks (guid, task, `status`, due_date, date_assigned, assigned_from) VALUES ('41339083-CC13-4064-8818-49A6580E0BB5', 'Determining which features to cut', 'done', '2023-06-19', '2023-06-21', 'bgates');