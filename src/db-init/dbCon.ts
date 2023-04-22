// Connect to the database and export the connection
const express = require("express");
const mongoose = require("mongoose");
const app = express();

export const createConnection = () => {
  const URL = process.env.MONGODB_URI;

  mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to database");
      }
    }
  );

  app.listen(3009, () => {
    console.log("Server started");
  });
};
