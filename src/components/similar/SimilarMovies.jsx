import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import NoImage from "../../assets/no-image.png";
const fetcher = (url) => fetch(url).then((res) => res.json());
const BASE_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_URL = "https://image.tmdb.org/t/p/w600_and_h900_face";
const SimilarMovies = () => {
  const movieItem = useParams();
  const { data, error } = useSWR(
    `${BASE_URL}/${movieItem.id}/similar?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <div className="flex flex-col md:grid grid-cols-2 gap-4">
      {data.results.length <= 2 ? (
        <h1 className="text-slate-100 font-bold text-2xl uppercase text-center py-10">
          No similar movies found.
        </h1>
      ) : (
        data.results.map((item) => (
          <Link key={item.id} to={`/movie/${item.id}`}>
            <div className="bg-white rounded-lg shadow-lg flex justify-center flex-col max-w-md">
              {item.backdrop_path ? (
                <LazyLoadImage
                  src={`${IMAGE_URL}${item.backdrop_path}`}
                  alt="movie-poster"
                  className="rounded-md shadow-md"
                />
              ) : (
                <img className="object-fit" src={NoImage} alt="movie-poster" />
              )}

              <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-slate-900">
                  {item.title}
                </h2>
                <p className="text-slate-700 mb-2">
                  {item.vote_average.toFixed(2)} / 10
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SimilarMovies;
