USE ub04Test;
INSERT INTO dbo_UB04LineItems (PatientId, Client_Name, FL42_Revenue_Code, FL43_Description, FL44_HCPS_Rates, FL45_Service_Date, FL46_Service_Units, FL47_Total_Charges, FL48_Noncovered_Charges, FL49)
VALUES
("7895", "Mikel Rodriguez", '{"code1": "0018", "code2": "0121", "code3": "0112"}','{"serv1": "Physician", "serv2": "Dental", "serv3": "Consultation"}',
'{"rate1": 489.66, "rate2": 85.00, "rate3": 892.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"nonCov1": 100.00, "nonCov2": 20.33, "nonCov3": 52.66}',
'{"nubc1": "_" , "nubc2": "_" , "nubc3": "_" }'),

("1895", "Chris Salgado", '{"code1": "0012", "code2": "0121", "code3": "0012"}','{"serv1": "Pediatrician", "serv2": "Dental", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"nonCov1": 100.00, "nonCov2": 20.33, "nonCov3": 52.66}',
'{"nubc1": "_" , "nubc2": "_" , "nubc3": "_" }'),

("2895", "Pablo Vazquez", '{"code1": "0312", "code2": "0101", "code3": "0012"}','{"serv1": "Pharmacy", "serv2": "Consultation", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"nonCov1": 100.00, "nonCov2": 20.33, "nonCov3": 52.66}',
'{"nubc1": "_" , "nubc2": "_" , "nubc3": "_" }'),

("3895", "Shaleem Malik", '{"code1": "0312", "code2": "0101", "code3": "0012"}','{"serv1": "Pharmacy", "serv2": "Consultation", "serv3": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32}', 
'{"nonCov1": 100.00, "nonCov2": 20.33, "nonCov3": 52.66}',
'{"nubc1": "_" , "nubc2": "_" , "nubc3": "_" }'),


("12345", "Tom Villar", '{"code1": "0312", "code2": "0101", "code3": "0012","code4": "0312", "code5": "0101", "code6": "0012", "code7": "0312", "code8": "0101", "code9": "0012","code10": "0012","code11": "0312", "code12": "0101", "code13": "0012","code14": "0312", "code15": "0101", "code16": "0012", "code17": "0312", "code18": "0101", "code19": "0012","code20": "0012","code21": "0312", "code22": "0101", "code23": "0023","code24": "0024", "code25": "0101", "code26": "0012", "code27": "0312"}','{"serv1": "Pharmacy", "serv2": "Consultation", "serv3": "Pediatrician","serv4": "Pharmacy", "serv5": "Consultation", "serv6": "Pediatrician","serv7": "Pharmacy", "serv8": "Consultation", "serv9": "Pediatrician","serv10": "Pharmacy", "serv11": "Consultation", "serv12": "Pediatrician","serv13": "Pharmacy", "serv14": "Consultation", "serv15": "Pediatrician","serv16": "Pharmacy", "serv17": "Consultation", "serv18": "Pediatrician","serv19": "Pharmacy", "serv20": "Consultation", "serv21": "Pediatrician","serv22": "Pharmacy", "serv23": "Dental", "serv24": "Physician","serv25": "Pharmacy", "serv26": "Consultation", "serv27": "Pediatrician"}',
'{"rate1": 500.66, "rate2": 85.00, "rate3": 500.66, "rate4": 500.66, "rate5": 85.00, "rate6": 500.66,"rate7": 500.66, "rate8": 85.00, "rate9": 500.66,"rate10": 500.66, "rate11": 85.00, "rate12": 500.66,"rate13": 500.66, "rate14": 85.00, "rate15": 500.66,"rate16": 500.66, "rate17": 85.00, "rate18": 500.66,"rate19": 500.66, "rate20": 85.00, "rate21": 500.66,"rate22": 500.66, "rate23": 500.10, "rate24": 600.20,"rate25": 500.66, "rate26": 85.00, "rate27": 500.66}',
'{"date1":"11/02/2018","date2":"12/02/2018","date3":"01/02/2019","date4":"11/02/2018","date5":"12/02/2018","date6":"01/02/2019","date7":"11/02/2018","date8":"12/02/2018","date9":"01/02/2019","date10":"11/02/2018","date11":"12/02/2018","date12":"01/02/2019","date13":"11/02/2018","date14":"12/02/2018","date15":"01/02/2019","date16":"11/02/2018","date17":"12/02/2018","date18":"01/02/2019","date19":"11/02/2018","date20":"12/02/2018","date21":"01/02/2019","date22":"11/02/2018","date23":"12/23/2018","date24":"01/24/2019","date25":"01/02/2019","date26":"01/02/2019","date27":"07/02/2019"}',
'{"unit1": 3, "unit2": 1, "unit3": 2,"unit4": 3, "unit5": 1, "unit6": 2,"unit7": 3, "unit8": 1, "unit9": 2,"unit10": 3, "unit11": 1, "unit12": 2,"unit13": 3, "unit14": 1, "unit15": 2,"unit16": 3, "unit17": 1, "unit18": 2,"unit19": 3, "unit20": 1, "unit21": 2,"unit22": 3, "unit23": 1, "unit24": 2,"unit25": 3, "unit26": 1, "unit27": 2}',
'{"charge1": 1357.98, "charge2": 55.00, "charge3": 905.32, "charge4": 1357.98, "charge5": 55.00, "charge6": 905.32, "charge7": 1357.98, "charge8": 55.00, "charge9": 905.32, "charge10": 1357.98, "charge11": 55.00, "charge12": 905.32, "charge13": 1357.98, "charge14": 55.00, "charge15": 905.32, "charge16": 1357.98, "charge17": 55.00, "charge18": 905.32, "charge19": 1357.98, "charge20": 55.00, "charge21": 905.32, "charge22": 1357.98, "charge23": 500.10, "charge24": 1200.40, "charge25": 1357.98, "charge26": 55.00, "charge27": 905.32}', 
'{"nonCov1": 100.00, "nonCov2": 20.33, "nonCov3": 52.66, "nonCov4": 100.00, "nonCov5": 20.33, "nonCov6": 52.66, "nonCov7": 100.00, "nonCov8": 20.33, "nonCov9": 52.66, "nonCov10": 100.00, "nonCov11": 20.33, "nonCov12": 52.66,"nonCov13": 100.00, "nonCov14": 20.33, "nonCov15": 52.66, "nonCov16": 100.00, "nonCov17": 20.33, "nonCov18": 52.66, "nonCov19": 100.00, "nonCov20": 20.33, "nonCov21": 52.66, "nonCov22": 100.00, "nonCov23": 20.33, "nonCov24": 52.66, "nonCov25": 20.33, "nonCov26": 20.33, "nonCov27": 20.33}',
'{"nubc1": "_" , "nubc2": "_" , "nubc3": "_", "nubc4": "_" , "nubc5": "_" , "nubc6": "_", "nubc7": "_" , "nubc8": "_" , "nubc9": "_", "nubc10": "_" , "nubc11": "_" , "nubc12": "_", "nubc13": "_" , "nubc14": "_" , "nubc15": "_", "nubc16": "_" , "nubc17": "_" , "nubc18": "_", "nubc19": "_" , "nubc20": "_" , "nubc21": "_" , "nubc22": "_" , "nubc23": "_" , "nubc24": "_", "nubc25": "_" , "nubc26": "_" , "nubc27": "_"}')