'use client'
import { motion } from 'framer-motion'
import DecryptedText from './decryptedText'

export default function QuizCard({ question, options, correctAnswer, onAnswer }: { question: string, options: string[], correctAnswer: number, onAnswer: (isCorrect: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', bounce: 0.5, duration: 1, ease: "easeOut" }}
      className='w-[360px] h-[480px] flex flex-col items-center justify-center bg-gray-900 shadow-2xl shadow-green-700/50 rounded-xl overflow-hidden'>
      <div data-quiz-question className='w-full h-42 p-8 flex items-start justify-between bg-gray-900'>
        <DecryptedText text={question} sequential={true} speed={18} animateOn='view' className='text-xl font-bold text-white text-justify tracking-wide leading-9' encryptedClassName='text-teal-600 text-sm'/>
      </div>
      <div data-quiz-options className='w-full h-full grid grid-cols-2 *:size-full *:rounded-none'>
        {options.map((option, index) => (
          <div key={index} onClick={() => onAnswer(index === (correctAnswer - 1))} className={`w-full h-full flex items-center justify-center p-4 text-sm md:text-md text-justify text-gray-400 bg-gray-700 cursor-pointer select-none hover:bg-gray-900 hover:inset-shadow-sm hover:inset-shadow-black/70 hover:text-gray-100 ${index === (correctAnswer - 1) ? 'active:bg-green-400' : 'active:bg-rose-400'}`}>{option}</div>
        ))}
      </div>
    </motion.div>
  )
}
