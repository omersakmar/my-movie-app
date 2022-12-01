import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import NoImage from "../../assets/no-image.png";
import { useTheme } from "../../hooks";
import RemoveButton from "../buttons/RemoveButton";
const IMAGE_URL = "https://image.tmdb.org/t/p/w600_and_h900_face";
const AddedMovies = ({ data }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="flex flex-col justify-center md:grid gap-6 mx-auto align-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {data.length < 1 ? (
        <h1 className="font-bold text-2xl uppercase py-5">
          Your list is empty.
        </h1>
      ) : (
        data.map((item) => (
          <div
            className="rounded-lg shadow-lg flex justify-center flex-col max-w-md border border-gray-50"
            style={{
              backgroundColor: isDarkMode ? "#222222" : "#EFF5F5",
            }}
            key={item.id}
          >
            <Link key={item.id} to={`/movie/${item.id}`}>
              {item.backdrop_path ? (
                <LazyLoadImage
                  src={`${IMAGE_URL}${item.backdrop_path}`}
                  alt="movie-poster"
                  className="rounded-md shadow-md"
                />
              ) : (
                <img className="object-fit" src={NoImage} alt="movie-poster" />
              )}
            </Link>
            <div
              className="p-6"
              style={{ color: isDarkMode ? "#EFF5F5" : "#222222" }}
            >
              <h2 className="font-bold mb-2 text-2xl">{item.title}</h2>
              <p className="mb-2">{item.vote_average.toFixed(2)} / 10</p>
              <RemoveButton movie={item.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AddedMovies;
