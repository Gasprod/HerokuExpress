var express = require("express"),
	app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("Hello from Herok Exress NodeJS world !");
});

app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});