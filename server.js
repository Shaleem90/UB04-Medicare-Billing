const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");


const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

require("./routes")(app);


module.exports = app;

app.listen(PORT, function() {
    console.log(`Listening on : http://localhost:${PORT}`);
})
