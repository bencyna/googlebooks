import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCHBOOK":
      return {
        ...state,
        SearchedBooks: action.books,
      };
    case "SAVEBOOKS":
      return {
        ...state,
        SavedBooks: action.books,
      };
    default:
      return state;
  }
};
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    SavedBooks: [],
    SearchedBooks: [],
    login: true,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
