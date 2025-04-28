'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function QuizCard({ question, options, correctAnswer, onAnswer }: { question: string, options: string[], correctAnswer: number, onAnswer: (isCorrect: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', bounce: 0.5, duration: 1, ease: "easeOut" }}
      className='w-[360px] h-[480px] flex flex-col items-center justify-center bg-gray-900 shadow-2xl shadow-green-700/50 rounded-xl overflow-hidden'>
      <div data-quiz-question className='w-full h-full p-4 flex items-center justify-center bg-gray-900'>
        <p className='text-xl font-bold text-white text-justify'>{question}</p>
      </div>
      <div data-quiz-options className='w-full h-full grid grid-cols-2 *:size-full *:rounded-none *:cursor-pointer'>
        {options.map((option, index) => (
          <Button key={index} variant={'ghost'} onClick={() => onAnswer(index === (correctAnswer - 1))} className={`text-lg text-gray-400 bg-gray-700 hover:bg-gray-900 hover:inset-shadow-sm hover:inset-shadow-black/70 hover:text-gray-100 ${index === (correctAnswer - 1) ? 'active:bg-cyan-400' : 'active:bg-rose-400'}`}>{option}</Button>
        ))}
      </div>
    </motion.div>
  )
}
