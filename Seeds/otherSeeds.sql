INSERT INTO owners(id,name,email,password,createdAt,updatedAt) VALUES (1,"Johny Baker","johny@barfood.com","johny",NOW(),NOW());

INSERT INTO businesses(id,name,add1,add2,city,st,zip,phone,website,email,oId,createdAt,updatedAt) VALUES (1,"BarFood","1234 Habersham","P.O. Box 1","Savannah","GA",31405, 1234567890,"barfood.com","johny@barfood.com",1,NOW(),NOW());

INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId,createdAt,updatedAt) VALUES (1,false,false,01/01/20,30,"Not slowing down",1,NOW(),NOW());

INSERT INTO days(id,day,open,close,bId,createdAt,updatedAt) VALUES (1,"Monday",9,9,1,NOW(),NOW());

INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId,createdAt,updatedAt) VALUES (1,false,false,false,false,false,false,false,false,false,false,1,NOW(),NOW());