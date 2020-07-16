USE ub04Test;
INSERT INTO dbo_UB04LineItems (PatientId, Client_Name, FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges, FL49)
VALUES
("7895", "Mikel Rodriguez", '{"code1": "0018", "code2": "0121", "code3": "0112"}','{"serv1": "Physician", "serv2": "Dental", "serv3": "Consultation"}',
'{"rate1": 489.66, "rate2": 85.00, "rate3": 892.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"non-cov1": 100.00, "non-cov2": 20.33, "non-cov3": 52.66}',
'{"nubc1": "-" , "nubc2": "-" , "nubc3": "-" }'),

("1895", "Chris Salgado", '{"code1": "0012", "code2": "0121", "code3": "0012"}','{"serv1": "Pediatrician", "serv2": "Dental", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"non-cov1": 100.00, "non-cov2": 20.33, "non-cov3": 52.66}',
'{"nubc1": "-" , "nubc2": "-" , "nubc3": "-" }'),

("2895", "Pablo Vazquez", '{"code1": "0312", "code2": "0101", "code3": "0012"}','{"serv1": "Pharmacy", "serv2": "Consultation", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"non-cov1": 100.00, "non-cov2": 20.33, "non-cov3": 52.66}',
'{"nubc1": "-" , "nubc2": "-" , "nubc3": "-" }'),

("3895", "Shaleem Malik", '{"code1": "0312", "code2": "0101", "code3": "0012"}','{"serv1": "Pharmacy", "serv2": "Consultation", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"non-cov1": 100.00, "non-cov2": 20.33, "non-cov3": 52.66}',
'{"nubc1": "-" , "nubc2": "-" , "nubc3": "-" }')