"use client";

import { motion } from "framer-motion";
import { Herr_Von_Muellerhoff } from "next/font/google";

export default function ResultCard({ score }: { score: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.5, duration: 1, ease: "easeOut" }}
      className="w-[360px] h-[480px] flex flex-col items-center justify-center gap-4 bg-red-500 shadow-lg rounded-xl overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 1,
          ease: "easeOut",
        }}
      >
        Result
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 1,
          ease: "easeOut",
        }}
        className="text-7xl font-bold"
      >
        {score}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 1,
          ease: "easeOut",
        }}
      >
        comment here.
      </motion.p>
    </motion.div>
  );
}
