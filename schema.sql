DROP DATABASE IF EXISTS covid_db;

CREATE DATABASE covid_db;
USE covid_db;

-- CREATE TABLE owner
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
--     email varchar(320) NOT NULL,
--     password varchar(40) NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE business
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
--     add1 varchar(255),
--     add2 varchar(255),
--     city varchar(255) NOT NULL,
--     st varchar(2),
--     zip int,
--     phone int,
--     website varchar(275),
--     email varchar(320),
--     oId int NOT NULL,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (oId) REFERENCES owner(id)
-- );

-- CREATE TABLE restrictions
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	mask BOOLEAN DEFAULT false,
--     distancing BOOLEAN DEFAULT false,
--     gloves BOOLEAN DEFAULT false,
--     hWashing BOOLEAN DEFAULT false,
--     temp BOOLEAN DEFAULT false,
--     cOut BOOLEAN DEFAULT false,
--     dThru BOOLEAN DEFAULT false,
--     lServices BOOLEAN DEFAULT false,
--     pSanitized BOOLEAN DEFAULT false,
--     tested BOOLEAN DEFAULT false,
--     bId int NOT NULL,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (bId) REFERENCES business(id)
-- );

-- CREATE TABLE changes
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
--     lStaff BOOLEAN DEFAULT false,
--     closed BOOLEAN DEFAULT false,
-- 	reopens DATE,
--     mAllowed int,
--     comments varchar(255) NOT NULL,
--     bId int NOT NULL,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (bId) REFERENCES business(id)
-- );

-- CREATE TABLE days
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	day varchar(10),
--     open int,
-- 	close int,
--     bId int NOT NULL,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (bId) REFERENCES business(id)
-- );

-- CREATE TABLE coviddata
-- (
-- 	id int NOT NULL,
-- 	cName varchar(255),
--     cases int,
-- 	deaths int,
--     cRate decimal,
--     hospital int,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE county
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255),
--     cdId int NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE city
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255),
--     cId int,
-- 	PRIMARY KEY (id),
--     FOREIGN KEY (cId) REFERENCES county(id)
-- );