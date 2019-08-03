import React, { Component } from "react";
import MaterialTable from "material-table";

class MatTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            {
              title: "Name",
              field: "name",
              cellStyle: { fontSize: "1rem", whiteSpace: "nowrap" },
              filtering: false
            },
            {
              title: "Approval Ratio",
              field: "approval_rating",
              type: "numeric",
              cellStyle: {
                fontSize: "1rem",
                whiteSpace: "nowrap"
              },
              // median: 49 approval ratio
              defaultFilter: "39",
              defaultSort: "desc",
              customFilterAndSearch: (num, rowData) =>
                num <= rowData.approval_rating
            },
            {
              title: "Review Count",
              field: "review_count",
              type: "numeric",
              cellStyle: { fontSize: "1rem", whiteSpace: "nowrap" },
              // median: 78 review count
              defaultFilter: "211",
              customFilterAndSearch: (num, rowData) =>
                num <= rowData.review_count
            },
            {
              title: "Cuisine",
              field: "category",
              cellStyle: { fontSize: "1rem" },
              filtering: false
            },
            {
              title: "Price Range",
              field: "price_range",
              cellStyle: { fontSize: "1rem", whiteSpace: "nowrap" },
              emptyValue: "-",
              defaultFilter: "$"
            }
          ]}
          data={this.props.restaurants}
          title="Restaurants in NYC"
          options={{
            pageSize: 15,
            pageSizeOptions: [10, 20, 50, 100],
            headerStyle: {
              fontSize: "1.2rem"
            },
            searchFieldStyle: {
              fontSize: "1.2rem"
            },
            actionsColumnIndex: 2,
            filtering: true
          }}
          style={{ padding: 15, margin: 15 }}
          actions={[
            {
              icon: "bookmark",
              tooltip: "Open a new tab in Yelp",
              onClick: (event, rowData) => {
                window.open(rowData.link, "_blank");
              }
            },
            {
              icon: "place",
              tooltip: "Open a new tab in Google Maps",
              onClick: (event, rowData) => {
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=
                  ${rowData.latitude},${rowData.longitude}`,
                  "_blank"
                );
              }
            }
          ]}
          localization={{
            header: {
              actions: "Links"
            },
            body: {
              filterRow: {
                filterTooltip: "Set minimum"
              },
              emptyDataSourceMessage: "Loading..."
            },
            toolbar: {
              searchPlaceholder: "Name or Cuisine"
            }
          }}
          isLoading={!this.props.restaurants.length}
        />
      </div>
    );
  }
}

export default MatTable;
