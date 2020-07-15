
-- Numbers as strings

-- USE ub04Test;
-- INSERT INTO dbo_UBO4LIneitems (PatientId, Client_Name, FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges)
-- VALUES
-- (3456, "Chris Salgado", '{"code1": "0012", "code2": "0021", "code3": "0012"}','{"serv1": "Pediatric", "serv2": "Pharmacy", "serv1": "Pediatric"}',
-- '{"rate1": "452.66", "rate2": "55.00", "rate3": "452.66"}',
-- '{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
-- '{"unit1": "3", "unit2": "1", "unit3": "2"}',
-- '{"charge1": "1357.98", "charge2": "55.00", "charge3": "905.32"}', 
-- '{"non-cov1": "100.00", "non-cov2": "20.33", "non-cov3": "52.66"}')

-- Numbers as numbers

USE ub04Test;
INSERT INTO dbo_UB04LineItems (PatientId, Client_Name, FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges, FL49)
VALUES
(003456, "Chris Salgado", '{"code1": "0012", "code2": "0021", "code3": "0012"}','{"serv1": "Pediatric", "serv2": "Pharmacy", "serv1": "Pediatric"}',
'{"rate1": 452.66, "rate2": 55.00, "rate3": 452.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"non-cov1": 100.00, "non-cov2": 20.33, "non-cov3": 52.66}',
'{"nubc1": , "nubc2": , "nubc3": }')