const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");
const db = require("./api/db");

const app = express();

const port = config.get("express_port");
const whitelist = config.get("whitelist");

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
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
app.get("/api/info", db.getAllInfo);
app.get("/api/users", db.getAllUsers);
app.post("/api/user/save", db.saveUser);
app.post("/api/user/update", db.updateUser);
app.post("/api/user/password", db.resetPassword);
app.post("/api/user/auth", db.auth);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
