"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "./QuizProgressBar";
import QuizCard from "./QuizCard";
import quizData from "@/data/quiz.json";
import ResultCard from "./ResultCard";

export default function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setIsCorrect(true);
      setScore(score + 1);
    }
    nextQuestion();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full flex flex-col items-center justify-center gap-4 p-10 z-10"
    >
      <ProgressBar
        className="w-[300px] absolute top-4 left-1/2 -translate-x-1/2"
        currentQuestion={currentQuestion}
        totalQuestions={quizData.length}
      />
      {isFinished ? (
        <ResultCard score={score} />
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
