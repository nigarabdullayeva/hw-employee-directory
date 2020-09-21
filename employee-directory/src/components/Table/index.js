import React from "react";

function Table(props) {
  return (
    <>
      <table className="table table-hover">{props.children}</table>
    </>
  );
}

export default Table;