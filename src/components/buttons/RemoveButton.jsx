import React, { useContext } from "react";
import { ListContext } from "../../context/WatchlistProvider";
import { motion } from "framer-motion";
const RemoveButton = ({ movie }) => {
  const { removeMovie } = useContext(ListContext);
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className="inline-block text-center max-w-xs rounded-md shadow-md px-4 py-2 text-slate-900 font-bold"
      style={{
        backgroundColor: "#B31E6F",
        color: "#EFF5F5",
      }}
      onClick={() => removeMovie(movie)}
    >
      Remove
    </motion.button>
  );
};

export default RemoveButton;
