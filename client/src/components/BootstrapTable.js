import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const products = [
  {
    name: "King’s Kitchen",
    reviewCount: 228,
    percent_high: 76.755,
    percent_low: 11.404,
    recentRating: 4,
    cuisine: ["Dim Sum", "Cantonese", "Chinese"],
    price_range: "$",
    address: "92 E Broadway, New York, NY 10002"
  }
];
const columns = [
  {
    dataField: "name",
    text: "Name"
  },
  {
    dataField: "reviewCount",
    text: "Review Count"
  },
  {
    dataField: "percent_high",
    text: "Approval Rating"
  },
  {
    dataField: "percent_low",
    text: "Disapproval Rating"
  },
  {
    dataField: "recentRating",
    text: "Recent Rating"
  },
  {
    dataField: "cuisine",
    text: "Cuisine"
  },
  {
    dataField: "price_range",
    text: "Price Range"
  },
  {
    dataField: "address",
    text: "Address"
  }
];

export default () => (
  <BootstrapTable
    keyField="id"
    data={products}
    columns={columns}
    bootstrap4={true}
  />
);
