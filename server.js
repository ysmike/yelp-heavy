const express = require("express");
const mongoose = require("mongoose");
const Restaurants = require("./models/restaurants");

const app = express();
app.set("json spaces", 2); // number of spaces for indentation

// DB config using Mongo Atlas
const uri = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// @route GET
app.get("/", (req, res) => {
  Restaurants.find()
    .where("reviewCount")
    .gt(200)
    .where("price_range")
    .equals("$$$")
    .limit(100)
    .sort("-percent_high")
    .select("-_id")
    .then(docs => res.json(docs))
    .catch(err => res.status(404).json({ success: false }));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
