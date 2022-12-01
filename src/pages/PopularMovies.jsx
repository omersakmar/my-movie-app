import React, { useState } from "react";
import useSWR from "swr";
import Popular from "../components/popular/Popular";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w600_and_h900_face";
const fetcher = (url) => fetch(url).then((res) => res.json());
const PopularMovies = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error } = useSWR(
    `${BASE_URL}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&page=${pageIndex}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  const items = JSON.parse(localStorage.getItem("watchlist"));
  console.log(items);
  return (
    <>
      <Popular
        data={data}
        IMAGE_URL={IMAGE_URL}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
    </>
  );
};

export default PopularMovies;
