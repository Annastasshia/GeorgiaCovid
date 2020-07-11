INSERT INTO owner(id,name,email,password) VALUES (1,"Johny Baker","johny@barfood.com","johny");

INSERT INTO business(id,name,add1,add2,city,st,zip,phone,website,email,oId) VALUES (1,"BarFood","1234 Habersham","P.O. Box 1","Savannah","GA",31405, 1234567890,"barfood.com","johny@barfood.com",1);

INSERT INTO changes(id,lStaff,closed,reopens,mAllowed,comments,bId) VALUES (1,false,false,01/01/20,30,"Not slowing down",1);

INSERT INTO days(id,day,open,close,bId) VALUES (1,"Monday",9,9,1);

INSERT INTO restrictions(id,mask,distancing,gloves,hWashing,temp,cOut,dThru,lServices,pSanitized,tested,bId) VALUES (1,false,false,false,false,false,false,false,false,false,false,1);