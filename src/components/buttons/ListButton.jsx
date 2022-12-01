import React, { useContext } from "react";
import { ListContext } from "../../context/WatchlistProvider";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
const ListButton = ({ movie }) => {
  const { addMovie } = useContext(ListContext);
  const { user } = useAuth0();
  return (
    <>
      <motion.button
        disabled={!user}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="inline-block text-center max-w-xs rounded-md shadow-md px-4 py-2 text-slate-900 font-bold"
        style={{
          backgroundColor: "#08FFC8",
        }}
        onClick={() => addMovie(movie)}
      >
        <p>Add to watchlist</p>
      </motion.button>
      {!user && <p>Sign in via Google to add this to your list.</p>}
    </>
  );
};

export default ListButton;
