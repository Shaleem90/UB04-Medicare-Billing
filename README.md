# HospiceMD-UB04

![GitHub repo size](https://img.shields.io/github/repo-size/Shaleem90/HospiceMD-UB04?logo=github)
![GitHub top language](https://img.shields.io/github/languages/top/Shaleem90/HospiceMD-UB04?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/Shaleem90/HospiceMD-UB04?color=green&logo=github&logoColor=green)

[APP](https://hospicemd-ub04.herokuapp.com/)
Web-based UB04 Form. Be able to see all of your patient billing information on our web-based UB04 form before submitting it to double check possible errors. If errors exist, update the information on you database on the moment from the UI web-app.

# Technologies Used

1. MySQL database with Sequelize ORM
2. Node and Express server
3. Handlebars.js template engine, CSS and SVG
4. Puppeteer
5. Heroku for deployment

# Table of Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [Features](#features)
* [Authors](#authors)

## Installation
If package.json doesn't show:
> 1.npm init // 2.npm install debug mysql2 sequelize express express-handlebars
If package.json shows:
> 1.npm install

## Instructions
> Check that all your UB04-Form is correct to avoid billing errors. If you see any problem on your form. Modify the information, hit "Update Button" and your database will be updated.
>Follow instructions below for integrating the app into your system:
> 1. When posting/populating database, you will need to create a JSON.stringify(object). Example for column FL42: "{"code1": "0012", "code2": "1111", ... "code24":"", ..."code999":"0199"}".
> 2. For proper functionality it is important to add elements to the same object and respect the syntax and ascending nature of the object keys.
> 3. Examples: 
>> FL42 = "{"code1": "0012", "code2": "1111", ...}"
>> FL43 = "{"serv1": "Dental", "serv2": "Pharmacy", ...}"
>> FL44 = "{"rate1": "500.50", "rate2": "57.88", ...}"
>> FL45 = "{"date1": "11/02/2020", "date2": "12/01/2020", ...}"
>> FL46 = "{"unit1": "3", "unit2": "1", ...}"
>> FL47 = "{"charge1": "1501.50", "charge2": "57.88", ...}"
>> FL48 = "{"nonCov1": "100.52", "nonCov2": "_", ...}"
>> FL49 = "{"nubc1": "_", "nubc2": "_", ...}"
> 4. If a service (serv1) it is added for a client, it is important to add information to the rest of columns' 1s elements even if there is no info (just put NA, "-" or ""). Example:

> 1, 7895, Mikel Rodriguez, {"code1":"11111","code2":"22223"}, {"serv1":"Pharmacy","serv2":"Dental"}, {"rate1":"489.66","rate2":"85"}, {"date1":"","date2":""}, {"unit1":"3","unit2":"1"}, {"charge1":"1300.98","charge2":"55"}, {"nonCov1":"NA","nonCov2":"_"}, {"nubc1":"_","nubc2":"_"}


## Features
* Two models/tables in the database. First model contains all of the patient info. Second model contains all of the patient services (form fields 42_1 - 49_1 to 42_22 - 49_22).
* PUT and GET methods to interact with the database
* CRUD method
* MVC paradigm for folder structure

## Authors

GitHub: https://github.com/musicman785
GitHub: https://github.com/Shaleem90
GitHub: https://github.com/pvazquezems
GitHub: https://github.com/MikelTafalla

