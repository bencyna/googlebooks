import React, { useState } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

export default function SearchItems() {
  const [state, dispatch] = useStoreContext();

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const SearchBook = async () => {
    try {
      const Books = await API.GetBooks(search);
      if (Books.data.items.length === 0) {
        return;
      }
      dispatch({
        type: "SEARCHBOOK",
        books: Books.data.items,
      });
      console.log(Books.data.items);
    } catch (error) {
      console.log(error);
    }
    console.log(state.SearchedBooks);
  };

  return (
    <div className="row searchForm">
      <h6>Book Search</h6>
      <input
        type="text"
        placeholder="Search for book"
        onChange={handleSearchChange}
      />
      <button
        className="btn btn-primary"
        onClick={SearchBook}
        style={{ width: "10rem", marginTop: "1rem" }}
      >
        Search
      </button>
    </div>
  );
}
