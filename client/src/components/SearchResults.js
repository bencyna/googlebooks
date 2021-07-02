import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";

export default function SearchResults() {
  const [state, dispatch] = useStoreContext();

  const saveBook = async (e) => {
    e.preventDefault();
    let saveBook = "";
    for (let i = 0; i < state.SearchedBooks.length; i++) {
      if (state.SearchedBooks[i].id === e.target.id) {
        saveBook = state.SearchedBooks[i];
      }
    }
    try {
      const book = await API.SaveBook({
        title: saveBook.volumeInfo.title,
        authors: saveBook.volumeInfo.authors,
        description: saveBook.volumeInfo.description,
        image: saveBook.volumeInfo.imageLinks.thumbnail,
      });
      alert("Book saved!");
    } catch (error) {
      alert("Oops, unable to save, sorry bout that");
      console.log(error);
    }
  };

  return (
    <div className="allResults row">
      {state.SearchedBooks.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          Your search Items will appear here
        </h3>
      ) : (
        <div>
          {state.SearchedBooks.map((book) => {
            return (
              <div key={book.id} className="book">
                <div
                  className="title col-md-12"
                  style={{ marginBottom: "1rem" }}
                >
                  <div className="bookDetails">
                    <h6>{book.volumeInfo.title}</h6>
                    <small>Written by {book.volumeInfo.authors}</small>
                  </div>
                  <div className="buttons">
                    <button
                      className="btn btn-outline-success"
                      onClick={saveBook}
                      id={book.id}
                    >
                      Save
                    </button>
                  </div>
                </div>
                <div className="synopsis row">
                  <img
                    className="col-md-3"
                    style={{ maxHeight: "20rem" }}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="image of book"
                  />
                  <p className="col-md-8">{book.volumeInfo.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
