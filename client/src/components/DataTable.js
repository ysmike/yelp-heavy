import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.createTableRows = this.createTableRows.bind(this);
  }

  // @autobind
  createTableRows() {
    const restaurantRows = this.props.restaurants.map(restaurant => {
      return (
        <Table.Row>
          <Table.Cell>{restaurant.name}</Table.Cell>
        </Table.Row>
      );
    });
    return restaurantRows;
  }

  render() {
    console.log(this.props);
    return (
      <Table>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Approval Rating</Table.HeaderCell>
          <Table.HeaderCell>Review Count</Table.HeaderCell>
          <Table.HeaderCell>Cuisine</Table.HeaderCell>
          <Table.HeaderCell>Price Range</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
        </Table.Header>
        <Table.Body>{this.createTableRows()}</Table.Body>
      </Table>
    );
  }
}

export default DataTable;
