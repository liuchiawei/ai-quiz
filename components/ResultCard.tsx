import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import RadarChartCard from "@/components/RadarChart";


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
      className="w-[360px] h-[480px] flex flex-col items-center justify-between gap-4 pt-10 pb-4 text-center bg-linear-[150deg] from-black to-gray-900 text-gray-400 shadow-2xl shadow-emerald-700/50 rounded-xl overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-1">
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
      </div>
      <RadarChartCard typeScores={typeScores} />
      <Button
        className="rounded-full size-8 cursor-pointer border-none hover:shadow-md hover:shadow-emerald-700/70"
        onClick={onRestart}
        variant="outline"
      >
        <RotateCcw className="size-4" />
      </Button>
    </motion.div>
  );
}
