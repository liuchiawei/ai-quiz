"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./QuizProgressBar";
import QuizCard from "./QuizCard";
import quizData from "@/data/quiz.json";
import ResultCard from "./ResultCard";
import confetti from "canvas-confetti";

type TypeScores = {
  基礎知識: number;
  技術的理解: number;
  倫理: number;
  応用: number;
  高度概念: number;
};

export default function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [typeScores, setTypeScores] = useState<TypeScores>({
    基礎知識: 0,
    技術的理解: 0,
    倫理: 0,
    応用: 0,
    高度概念: 0,
  });
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // クイズ終了
      setIsFinished(true);

      // お祝い效果
      if (canvasRef.current) {
        const myConfetti = confetti.create(canvasRef.current, {
          resize: true,
          useWorker: true,
        });

        myConfetti({
          particleCount: 100,
          spread: 140,
        });
      }
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
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
      技術的理解: 0,
      倫理: 0,
      応用: 0,
      高度概念: 0,
    });
    // クイズ終了フラグ初期化
    setIsFinished(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full flex flex-col items-center justify-center gap-4 p-10 z-10"
    >
      {/* お祝いエフェクト */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 touch-none select-none"
      />
      {/* プログレスバー */}
      <ProgressBar
        className="w-[300px] absolute top-4 left-1/2 -translate-x-1/2"
        currentQuestion={currentQuestion}
        totalQuestions={quizData.length}
      />
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
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          correctAnswer={quizData[currentQuestion].correctAnswer}
          onAnswer={handleAnswer}
        />
      )}
    </motion.div>
  );
}
