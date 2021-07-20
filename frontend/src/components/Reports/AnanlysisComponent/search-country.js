import React, { useEffect } from "react";
import Header from "../../Navbar/header";
import "../../../styles.css";

import { Table } from "react-bootstrap";

export default function TableSearchView(props) {
  return (
    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{1}</td>
            <td>{props.name}</td>
            <td>{props.name}</td>
          </tr>

        </tbody>

      </Table>

    </div>
  )
}