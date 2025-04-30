"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeaderTitle() {
  return (
    <motion.div className="w-full h-full p-20 flex flex-col items-center justify-center absolute top-0 left-0 z-20 gap-6">
      {/* タイトル */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        custom={0}
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-gray-500 to-white text-5xl md:text-6xl lg:text-8xl relative z-20 font-black text-shadow-lg tracking-tight select-none"
      >
        AIに対する
        <br />
        テスト
      </motion.h1>
      {/* サブタイトル */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        custom={1}
        transition={(i: number) => ({
          duration: 0.5,
          ease: "easeOut",
          delay: 0.3 * i,
        })}
        className="text-center text-gray-200 text-sm md:text-base lg:text-lg"
      >
        AIに関する知識をテストし、理解度を測定します。
      </motion.p>
      {/* スタートボタン */}
      <Link href="/quiz">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          custom={2}
          transition={(i: number) => ({
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3 * i,
          })}
          className="mt-8 cursor-pointer border border-gray-300 rounded-full backdrop-blur-xs text-gray-400 px-8 py-2 relative z-10 transition-all hover:text-gray-50 hover:shadow-lg hover:shadow-emerald-500/50 active:translate-y-1 overflow-hidden after:absolute after:left-0 after:top-0 after:-z-10 after:right-full after:h-full after:bg-emerald-500/30  after:transition-all after:duration-200 hover:after:right-0 hover:text-white"
        >
          START
        </motion.button>
      </Link>
    </motion.div>
  );
}
