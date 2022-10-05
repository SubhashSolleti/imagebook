import React from "react";
import useFirestore from "../hooks/useFirestore";
import {motion, MotionConfig} from "framer-motion";

function ImageGrid({setSelectedImg}) {
  const {docs} = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 10}}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploadded pic"
              initial={{opacity: 20}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
