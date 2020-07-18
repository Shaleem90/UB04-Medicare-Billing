const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const debug = require("debug")

const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models");


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


require("./routes")(app);

module.exports = app;

db.sequelize.sync().then(function () {
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    debug("Express server listening on port " + server.address().port);
    console.log(`Listening on port: ${PORT}`);
  }); 
});

app.listen(PORT, function() {
    console.log(`Listening on : http://localhost:${PORT}`);
})
