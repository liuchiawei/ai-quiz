"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./QuizProgressBar";
import QuizCard from "./QuizCard";
import quizData from "@/data/quiz.json";
import ResultCard from "./ResultCard";
import confetti from "canvas-confetti";

export default function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
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
    if (isCorrect) {
      setIsCorrect(true);
      setScore(score + 1);
    }
    nextQuestion();
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
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
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 touch-none select-none"
      />
      <ProgressBar
        className="w-[300px] absolute top-4 left-1/2 -translate-x-1/2"
        currentQuestion={currentQuestion}
        totalQuestions={quizData.length}
      />
      {isFinished ? (
        <ResultCard score={score} onRestart={handleRestart} />
      ) : (
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
