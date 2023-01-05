import React from "react";

const SearchForm = ({searchHandler}) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search Here" onChange={searchHandler} />
    </div>
  );
};

export default SearchForm;