import React, { useContext } from "react";
import AddedMovies from "../components/user/AddedMovies";
import Profile from "../components/user/Profile";
import { ListContext } from "../context/WatchlistProvider";

const Watchlist = () => {
  const { watchlist } = useContext(ListContext);
  console.log(watchlist);
  return (
    <div className="min-h-screen p-10">
      <h2 className="text-2xl font-bold mb-10 text-center">Watchlist</h2>
      <Profile />
      <AddedMovies data={watchlist} />
    </div>
  );
};

export default Watchlist;
