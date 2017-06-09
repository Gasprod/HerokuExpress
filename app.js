var express = require("express"),
	app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "tmp/build")));

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.render('index');
    console.log('index rendered ... '.rainbow);
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});