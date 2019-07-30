const express = require("express");
const mongoose = require("mongoose");
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
    .limit(100)
    .select("-_id");

  res.send(docs);
});

// express will serve up client production assets
// app.use(express.static('client/build'));
// express will serve up index.html if it doesn't recognize route
// const path = require('path');
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
