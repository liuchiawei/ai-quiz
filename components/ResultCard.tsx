import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function ResultCard({ score, onRestart, quizLength }: { score: number, onRestart: () => void, quizLength: number }) {
  const correctRate = (score / quizLength) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.6, duration: 1, ease: "easeOut" }}
      className="w-[360px] h-[480px] flex flex-col items-center justify-center gap-4 text-center bg-gray-900 text-gray-400 shadow-lg rounded-xl overflow-hidden"
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
        正解率
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
        className="text-7xl font-bold text-gray-50"
      >
        {correctRate.toFixed(1)}<span className="text-sm font-normal">%</span>
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
        {score} / {quizLength}
      </motion.p>
      <Button
        className="rounded-full size-8 cursor-pointer"
        onClick={onRestart}
      >
        <RotateCcw className="size-4" />
      </Button>
    </motion.div>
  );
}
