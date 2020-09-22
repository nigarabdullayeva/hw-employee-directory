  
import React from "react";

function Search() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline">
          <input
            className=" col form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.search}
          />
          <button
            className="btn btn-outline-info my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default Search;