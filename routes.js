module.exports = function(app) {
    const patients = require("./routes/patients");
    const ub04 = require("./routes/ub04");

    app.use("/", patients);
    app.use("/ub04form", ub04);
}