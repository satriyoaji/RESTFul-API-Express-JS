import express from "express"; //or const express = require('express');
// import bodyParser from "body-parser";

import mongoose from "mongoose";
import MONGO_URI from "./config.js";

import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json()); //body parser middleware
app.use("/api/users", usersRoutes); //like resource route

mongoose
  .connect(MONGO_URI.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo DB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
