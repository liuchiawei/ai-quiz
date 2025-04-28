"use client";

import React from "react";
import { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { StarsBackground } from "@/components/ui/stars-background";
import QuizBoard from "@/components/QuizBoard";
import HeaderTitle from "@/components/HeaderTitle";
import LetterGlitch from "@/components/LetterGlitch";

export default function Home() {
  const [isQuizActive, setIsQuizActive] = useState(false);
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      {!isQuizActive && (
        <HeaderTitle
          isQuizActive={isQuizActive}
          setIsQuizActive={setIsQuizActive}
        />
      )}
      {isQuizActive && <QuizBoard />}
    </div>
  );
}
