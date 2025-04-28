"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function ProgressBar({
  className,
  currentQuestion,
  totalQuestions,
}: {
  className?: string;
  currentQuestion: number;
  totalQuestions: number;
}) {
  return (
    <div
      className={cn(
        " h-2 bg-black/70 rounded-full shadow-lg shadow-green-500/50",
        className
      )}
    >
      <div
        className="h-full bg-green-300 rounded-full shadow-lg shadow-green-500/50 transition-all duration-300"
        style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
      ></div>
    </div>
  );
}
