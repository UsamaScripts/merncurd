const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Model/User.js");
const core = require("cors");

const app = express();
app.use(core());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/curd");

app.get("/", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("this is working");
});
