"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import ProgressBar from "@/components/QuizProgressBar";
import QuizCard from "@/components/QuizCard";
import ResultCard from "@/components/ResultCard";
import Timer from "@/components/timer";
import quizData from "@/data/quiz_hai.json";

export type TypeScores = {
  基礎知識: number;
  倫理: number;
  高度概念: number;
  未来のトレンド: number;
  技術の理解: number;
  応用: number;
};

export default function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [typeScores, setTypeScores] = useState<TypeScores>({
    基礎知識: 0,
    倫理: 0,
    高度概念: 0,
    未来のトレンド: 0,
    技術の理解: 0,
    応用: 0,
  });
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startTime = useRef<number>(0);

  // 問題の順序をランダムに並べ替え、重複を避ける
  const shuffledQuizData = useMemo(() => {
    const uniqueQuestions = Array.from(
      new Map(quizData.map((q) => [q.id, q])).values()
    );
    return [...uniqueQuestions].sort(() => Math.random() - 0.5);
  }, []);

  const nextQuestion = async () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // クイズ終了
      setIsFinished(true);

      // クイズ結果の記録を資料庫に保存
      // if (userId) {
      //   try {
      //     const response = await fetch("/api/record", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         score,
      //         typeScores,
      //         timeSpent: Math.floor((Date.now() - startTime.current) / 1000),
      //         userId,
      //       }),
      //     });

      //     if (!response.ok) {
      //       throw new Error("Failed to save record");
      //     }

      //     const data = await response.json();
      //     console.log("Record saved successfully:", data);
      //   } catch (error) {
      //     console.error("Error saving record:", error);
      //   }
      // }

      // お祝い效果
      if (canvasRef.current) {
        const myConfetti = confetti.create(canvasRef.current, {
          resize: true,
          useWorker: true,
        });

        myConfetti({
          particleCount: 100,
          spread: 120,
        });
      }
    }
  };

  const handleAnswer = async (isCorrect: boolean) => {
    // 回答が正解
    if (isCorrect) {
      // スコア加算
      setScore(score + 1);
      // タイプごとのスコア加算
      const currentType = quizData[currentQuestion].type as keyof TypeScores;
      setTypeScores((prev) => ({
        ...prev,
        [currentType]: prev[currentType] + 1,
      }));
    }
    nextQuestion();
  };

  const handleRestart = () => {
    // クイズ初期化
    setCurrentQuestion(0);
    // スコア初期化
    setScore(0);
    // タイプごとのスコア初期化
    setTypeScores({
      基礎知識: 0,
      倫理: 0,
      高度概念: 0,
      未来のトレンド: 0,
      技術の理解: 0,
      応用: 0
    });
    // クイズ終了フラグ初期化
    setIsFinished(false);
    // タイマー初期化
    startTime.current = Date.now();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-svh md:h-screen flex flex-col items-center justify-center p-4 gap-4 z-10"
    >
      {/* お祝いエフェクト */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full touch-none select-none pointer-events-none"
      />
      {/* プログレスバー */}
      <ProgressBar
        className="w-[300px] absolute top-4 left-1/2 -translate-x-1/2"
        currentQuestion={currentQuestion}
        totalQuestions={quizData.length}
      />
      {/* タイマー */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <h2 className="text-gray-400 text-sm">タイム</h2>
        <Timer
          isFinished={isFinished}
          className={`text-lg tracking-wider ${
            isFinished ? "text-gray-300" : "text-emerald-400/70"
          } `}
        />
      </div>
      {/* クイズ終了時の結果カード */}
      {isFinished ? (
        <ResultCard
          score={score}
          onRestart={handleRestart}
          quizLength={quizData.length}
          typeScores={typeScores}
        />
      ) : (
        // クイズ進行中のクイズカード
        <QuizCard
          question={shuffledQuizData[currentQuestion].question}
          options={shuffledQuizData[currentQuestion].options}
          correctAnswer={shuffledQuizData[currentQuestion].correctAnswer}
          onAnswer={handleAnswer}
        />
      )}
    </motion.div>
  );
}
