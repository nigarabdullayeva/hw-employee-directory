
import React from "react";

function TableInfo(props) {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.position}</td>
          <td>{props.department}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TableInfo;