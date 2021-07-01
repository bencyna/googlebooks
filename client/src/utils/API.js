import axios from "axios";
export default {
  GetBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  GetSavedBooks: function () {
    return axios.get("/api/books");
  },
  SaveBook: function (saveBook) {
    return axios.post("/api/books", saveBook);
  },
};
