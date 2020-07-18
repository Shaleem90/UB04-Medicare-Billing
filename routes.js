module.exports = function(app) {
    const patients = require("./routes/patients");
    const ub04 = require("./routes/ub04");
    const services = require("./routes/ub04services");
    const ptInfo = require("./routes/ub04ptInfo");

    // localhost:8080/
    app.use("/", patients);
    // localhost:8080/ub04form
    app.use("/ub04form", ub04);
    // localhost:8080/ub04services
    app.use("/ub04form/ub04services", services);

    // localhost:8080/ub04ptInfo
    app.use("/ub04form/ub04ptInfo", ptInfo);


};