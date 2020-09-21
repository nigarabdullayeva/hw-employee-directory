import React from "react";

function Information (props) {
    return (
        <div className="row">{props.children}</div>
    );
}

export default Information;