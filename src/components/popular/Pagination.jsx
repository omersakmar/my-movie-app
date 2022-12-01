import React from "react";
import { motion } from "framer-motion";
const Pagination = ({ pageIndex, data, setPageIndex }) => {
  return (
    <div className="flex justify-center mt-10 gap-2">
      {pageIndex !== 1 && (
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setPageIndex((prev) => prev - 1)}
          className="px-3 py-2 ml-0 leading-tight border border-gray-200"
        >
          Previous
        </motion.button>
      )}
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        disabled={pageIndex === data.total_pages}
        onClick={() => setPageIndex((prev) => prev + 1)}
        className="px-3 py-2 ml-0 leading-tight border border-gray-200"
      >
        Next
      </motion.button>
    </div>
  );
};

export default Pagination;
