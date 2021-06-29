import React from "react";
import { useStoreContext } from "../utils/GlobalState";

export default function SearchResults() {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="allResults">
      {state.SearchedBooks.map((book) => {
        return (
          <div key={book.id}>
            <div className="title">
              <div className="bookDetails">
                <h6>{book.volumeInfo.title}</h6>
                <p>Small blurb</p>
                <small>Written by {book.volumeInfo.authors}</small>
              </div>
              <div className="buttons">
                <button>View</button>
                <button>Save</button>
              </div>
            </div>
            <div className="synopsis">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="image of book"
              />
              <p>{book.volumeInfo.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
