import React, { createContext, useReducer, useEffect } from "react";
import ListReducer from "./ListReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const ListContext = createContext(initialState);

export const ListProvider = (props) => {
  const [state, dispatch] = useReducer(ListReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addMovie = (movie) => {
    const existingItem = state.watchlist.find((item) => item.id === movie.id);
    if (existingItem) {
      alert("You already have this movie in your watchlist");
      return state;
    } else {
      alert("Movie has been added to your list");
      dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
    }
  };
  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  return (
    <ListContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovie,
        removeMovie,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
