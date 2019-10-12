const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const db = require("./queries");

var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors(corsOptions));

app.get("/", (request, response) => {
  response.json({
    info: "Node.js, Express, and Postgres API."
  });
});

app.get("/info", db.getAllInfo);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
