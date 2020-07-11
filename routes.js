module.exports = function(app) {
    const patients = require(".routes/patients");

    app.use("/", patients);
}