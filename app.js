var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const userRouter = require("./app/api/user/router");
const experienceRouter = require("./app/api/experience/router");
const projectRouter = require("./app/api/project/router");
const achievementRouter = require("./app/api/achievement/router");

app.use("/api/user", userRouter);
app.use("/api/experience", experienceRouter);
app.use("/api/project", projectRouter);
app.use("/api/achievement", achievementRouter);

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

module.exports = app;
