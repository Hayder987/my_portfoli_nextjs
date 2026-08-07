"use client";

import { motion } from "framer-motion";


export default function GradientMesh() {

  return (
    <>


      <motion.div

        animate={{
          x:[0,120,0],
          y:[0,-80,0],
        }}

        transition={{
          duration:18,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute

          -left-32
          -top-32

          h-72
          w-72

          sm:h-96
          sm:w-96

          rounded-full

          bg-primary/20

          blur-[120px]
        "

      />



      <motion.div

        animate={{
          x:[0,-100,0],
          y:[0,80,0],
        }}

        transition={{
          duration:22,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          absolute

          -right-32
          -bottom-32

          h-80
          w-80


          sm:h-112.5
          sm:w-112.5


          rounded-full

          bg-secondary/20

          blur-[140px]
        "

      />




      <motion.div

        animate={{
          scale:[1,1.15,1],
        }}

        transition={{
          duration:14,
          repeat:Infinity,
        }}

        className="
          absolute

          left-1/2
          top-1/2

          h-72
          w-72

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-accent/20

          blur-[120px]
        "

      />


    </>
  );
}