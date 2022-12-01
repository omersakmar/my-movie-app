import { useAuth0 } from "@auth0/auth0-react";
import ListButton from "../buttons/ListButton";
import SimilarMovies from "../similar/SimilarMovies";

const SingleMovie = ({ IMAGE_URL, data }) => {
  const { user } = useAuth0();
  return (
    <div
      className="flex flex-col justify-center px-6 py-12 items-center"
      style={{
        background:
          "linear-gradient(0deg, rgba(99,2,69,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="flex flex-col items-center md:flex-row">
        <div className="px-4 py-14 border-slate-50 md:px-8">
          <img
            src={`${IMAGE_URL}${data.backdrop_path}`}
            alt="movie-poster"
            className="rounded-lg"
          />
        </div>
        <div
          key={data.id}
          className="flex flex-col gap-6 text-slate-50 max-w-md py-12"
        >
          <h2 className="text-xl lg:text-3xl font-bold">
            {data.title.toUpperCase()}
          </h2>
          <p>{data.overview}</p>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-center max-w-xs rounded-md shadow-md px-4 py-2 text-slate-900 font-bold"
              style={{ backgroundColor: "#D5A506" }}
            >
              Check on IMDb
            </a>
            <ListButton movie={data} />
          </div>
        </div>
        <div className="flex flex-row gap-4 lg:flex-col text-center">
          {data.genres?.map((genre, index) => (
            <span
              key={index}
              className="flex justify-center items-center px-6 py-4 text-xs font-bold  text-slate-900 bg-slate-100 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="text-slate-100 font-bold text-2xl uppercase text-center py-10">
          Similar Movies
        </h1>
        <SimilarMovies />
      </div>
    </div>
  );
};

export default SingleMovie;
