INSERT INTO owners(id,name,email,password,createdAt,updatedAt) VALUES (1,"Johny Baker","johny@barfood.com","johny",NOW(),NOW());
INSERT INTO owners(id,name,email,password,createdAt,updatedAt) VALUES (2,"Sally Smith","sallys@riverstreetsweets.com","sally",NOW(),NOW());
INSERT INTO owners(id,name,email,password,createdAt,updatedAt) VALUES (3,"Frank Jones","frank@barbaritos.com","frank",NOW(),NOW());
INSERT INTO owners(id,name,email,password,createdAt,updatedAt) VALUES (4,"George Decker","georgedred&white.com","George",NOW(),NOW());

INSERT INTO businesses(id,name,add1,add2,city,county,st,zip,phone,website,email,oId,createdAt,updatedAt,ownerId) VALUES (1,"BarFood","4517 Habersham Street"," ","Savannah","Chatham","GA",31405, 1234567890,"barfood.com","johny@barfood.com",1,NOW(),NOW(),1);
INSERT INTO businesses(id,name,add1,add2,city,county,st,zip,phone,website,email,oId,createdAt,updatedAt,ownerId) VALUES (2,"River Street Sweets","4515 Habersham Street"," ","Savannah","Chatham","GA",31405, 1234567890,"riverstreetsweets.com","sallys@riverstreetsweets.com",2,NOW(),NOW(),2);
INSERT INTO businesses(id,name,add1,add2,city,county,st,zip,phone,website,email,oId,createdAt,updatedAt,ownerId) VALUES (3,"Barberitos Southwestern Grille & Cantina","4525 Habersham Street"," ","Savannah","Chatham","GA",31405, 1234567890,"barberitos.com","frank@barberitos.com",3,NOW(),NOW(),3);
INSERT INTO businesses(id,name,add1,add2,city,county,st,zip,phone,website,email,oId,createdAt,updatedAt,ownerId) VALUES (4,"Red & White Food Stores","4607 Habersham Street"," ","Savannah","Chatham","GA",31405, 1234567890,"red&white.com","georgedred&white.com",1,NOW(),NOW(),4);

INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId,createdAt,updatedAt,BusinessId) VALUES (1,false,false,01/01/20,30,"Not slowing down",1,NOW(),NOW(),1);
INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId,createdAt,updatedAt,BusinessId) VALUES (2,true,false,01/01/20,12,"Rocking it",1,NOW(),NOW(),2);
INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId,createdAt,updatedAt,BusinessId) VALUES (3,true,true,07/9/20,8,"We are still full service",1,NOW(),NOW(),3);
INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId,createdAt,updatedAt,BusinessId) VALUES (4,false,false,01/01/20,86,"Please wear your mask!",1,NOW(),NOW(),4);

INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (1,"Monday",9,9,1,NOW(),NOW(),1);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (2,"Tuesday",9,9,1,NOW(),NOW(),1);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (3,"Wednesday",9,9,1,NOW(),NOW(),1);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (4,"Friday",9,9,1,NOW(),NOW(),1);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (5,"Monday",9,9,1,NOW(),NOW(),2);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (6,"Friday",9,3,1,NOW(),NOW(),2);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (7,"Monday",9,9,1,NOW(),NOW(),3);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (8,"Wednesday",12,9,1,NOW(),NOW(),3);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (9,"Monday",9,9,1,NOW(),NOW(),4);
INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt,BusinessId) VALUES (10,"Tuesda",9,5,1,NOW(),NOW(),4);

INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId,createdAt,updatedAt,BusinessId) VALUES (1,false,false,false,false,false,false,false,false,false,false,1,NOW(),NOW(),1);
INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId,createdAt,updatedAt,BusinessId) VALUES (2,false,true,false,false,true,true,true,true,false,false,1,NOW(),NOW(),2);
INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId,createdAt,updatedAt,BusinessId) VALUES (3,true,true,true,false,false,false,true,true,false,true,1,NOW(),NOW(),3);
INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId,createdAt,updatedAt,BusinessId) VALUES (4,false,true,true,false,true,true,false,false,true,false,1,NOW(),NOW(),4);
