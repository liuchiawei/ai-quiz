import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

type TypeScores = {
  基礎知識: number;
  技術的理解: number;
  倫理: number;
  応用: number;
  高度概念: number;
};

export default function ResultCard({
  score,
  onRestart,
  quizLength,
  typeScores,
}: {
  score: number;
  onRestart: () => void;
  quizLength: number;
  typeScores: TypeScores;
}) {
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
        {correctRate.toFixed(1)}
        <span className="text-sm font-normal">%</span>
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
      <div className="flex flex-col gap-2">
        {Object.entries(typeScores).map(([type, score]) => (
          <motion.p
            key={type}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 1,
              ease: "easeOut",
            }}
          >
            {type}: {score}
          </motion.p>
        ))}
      </div>
      <Button
        className="rounded-full size-8 cursor-pointer"
        onClick={onRestart}
      >
        <RotateCcw className="size-4" />
      </Button>
    </motion.div>
  );
}
