const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Restaurants = require("./models/restaurants");

const app = express();
app.set("json spaces", 2); // set number of spaces for indentation

// DB config using Mongo Atlas
const uri = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// @route GET
app.get("/api/restaurants", async (req, res) => {
  const docs = await Restaurants.find()
    .sort("-percent_high")
    .select(
      "-_id -percent_high -percent_low -percent_of_5 -percent_of_4 -percent_of_3 -percent_of_2 -percent_of_1 -aggregate_rating -phone -GeoJSON"
    );

  res.send(docs);
});

// express will serve up client production assets
app.use(express.static("client/build"));
// express will serve up index.html if it doesn't recognize route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
