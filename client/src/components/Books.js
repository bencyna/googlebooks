import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function SavedBooks() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const Books = await API.GetSavedBooks();

        dispatch({
          type: "SAVEBOOKS",
          books: Books.data,
        });
      } catch (error) {
        console.log(error);
      }
      console.log(state.SavedBooks);
    };
    getBooks();
  }, []);

  return (
    <div
      onClick={() => {
        console.log(state.SavedBooks);
      }}
    >
      <h3 style={{ marginLeft: "5rem" }}>Saved Books</h3>
      <div className="allResults row">
        {state.SavedBooks.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            You have no saved books, find your favourites{" "}
            <Link to="/search">here</Link> and add them to you saved!
          </h3>
        ) : (
          <div>
            {state.SavedBooks.map((book) => {
              return (
                <div key={book.title} className="book">
                  <div
                    className="title col-md-12"
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className="bookDetails">
                      <h6>{book.title}</h6>
                      <small>Written by {book.authors}</small>
                    </div>
                    <div className="buttons">
                      <button className="btn btn-outline-danger">Delete</button>
                    </div>
                  </div>
                  <div className="synopsis row">
                    <img
                      className="col-md-3"
                      style={{ maxHeight: "20rem" }}
                      src={book.image}
                      alt="image of book"
                    />
                    <p className="col-md-8">{book.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
