const mongoose = require("mongoose");
// const GeoJSON = require("mongoose-geojson-schema");
// const ObjectId = mongoose.Schema.Types.ObjectId;

const RestaurantsSchema = new mongoose.Schema({
  //   _id: ObjectId,
  //   name: String,
  //   reviewCount: Number,
  //   percent_high: Number,
  //   percent_low: Number,
  //   aggregateRating: Number,
  //   recentRating: Number,
  //   cuisine: Array,
  //   price_range: String,
  //   telephone: String,
  //   link: String,
  //   address: String,
  //   longitude: Number,
  //   latitude: Number,
  //   GeoJSON: GeoJSON
});

module.exports = mongoose.model("Restaurants", RestaurantsSchema);
