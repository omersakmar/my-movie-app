import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import SingleMovie from "../components/movieItem/SingleMovie";
const fetcher = (url) => fetch(url).then((res) => res.json());
const IMAGE_URL = "https://image.tmdb.org/t/p/w600_and_h900_face";
const BASE_URL = "https://api.themoviedb.org/3/movie";
const MovieItem = () => {
  const movieItem = useParams();

  const { data, error } = useSWR(
    `${BASE_URL}/${movieItem.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return <SingleMovie IMAGE_URL={IMAGE_URL} data={data} />;
};

export default MovieItem;
