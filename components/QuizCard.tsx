'use client'
import { motion } from 'framer-motion'
import DecryptedText from './decryptedText'
import { useEffect } from 'react'

export default function QuizCard({ question, options, correctAnswer, onAnswer }: { question: string, options: string[], correctAnswer: number, onAnswer: (isCorrect: boolean) => void }) {
  // キーボードで回答を選択できるようにする
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key
      if (key >= '1' && key <= '4') {
        const index = parseInt(key) - 1
        if (index < options.length) {
          onAnswer(index === (correctAnswer - 1))
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [options.length, correctAnswer, onAnswer])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.5, duration: 1, ease: "easeOut" }}
      className="w-full max-w-[420px] h-full max-h-[594px] flex flex-col items-center justify-center bg-gray-950 shadow-lg shadow-emerald-700/50 rounded-xl overflow-hidden"
    >
      <div
        data-quiz-question
        className="w-full max-w-[420px] h-42 p-8 flex items-start bg-gray-950"
      >
        <DecryptedText
          text={question}
          sequential={true}
          speed={18}
          animateOn="view"
          className="text-xl font-bold text-white text-justify tracking-wide leading-9 text-wrap"
          parentClassName="w-full"
          encryptedClassName="text-emerald-600 text-sm"
        />
      </div>
      <div
        data-quiz-options
        className="w-full h-full grid grid-cols-2 *:size-full *:rounded-none"
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onAnswer(index === correctAnswer - 1)}
            className={`w-full h-full flex items-center justify-center p-4 text-sm md:text-md text-justify text-gray-400 bg-gray-700 cursor-pointer select-none hover:bg-gray-900 hover:inset-shadow-sm hover:inset-shadow-black/70 hover:text-gray-100 ${
              index === correctAnswer - 1
                ? "active:bg-emerald-400"
                : "active:bg-rose-400"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
