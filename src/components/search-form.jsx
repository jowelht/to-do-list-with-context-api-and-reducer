import React, { useContext } from "react";
import { ToDoContext } from "../contexts/to-do-context";
const SearchForm = () => {
  const { searchHandler } = useContext(ToDoContext)
  return (
    <div className="search">
      <input type="text" placeholder="Search Here" onChange={(e)=> searchHandler(e)} />
    </div>
  );
};

export default SearchForm;