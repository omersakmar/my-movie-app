import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import NoImage from "../../assets/no-image.png";
import Pagination from "./Pagination";
import "./Popular.css";
import { motion } from "framer-motion";
const Popular = ({ data, IMAGE_URL, pageIndex, setPageIndex }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center md:grid gap-6 mx-auto align-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {data.results.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={item.id}
            className="flex flex-col text-center max-w-sm border-slate-50 rounded-lg shadow-lg overflow-hidden"
          >
            <Link to={`/movie/${item.id}`}>
              {item.backdrop_path ? (
                <LazyLoadImage
                  src={`${IMAGE_URL}${item.backdrop_path}`}
                  alt="movie-poster"
                />
              ) : (
                <img className="object-fit" src={NoImage} alt="movie-poster" />
              )}

              <div className="px-4 py-2">
                <p className="text-md lg:text-lg xl:text-xl font-bold">
                  {item.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <Pagination
        pageIndex={pageIndex}
        data={data}
        setPageIndex={setPageIndex}
      />
    </div>
  );
};

export default Popular;
