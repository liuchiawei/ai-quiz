'use client'
import { motion } from 'framer-motion'
import QuizCardSet from './QuizCardSet'
import QuizButtonSet from './QuizButtonSet'
import ProgressBar from './QuizProgressBar'

export default function QuizBoard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-10'>
      <ProgressBar className='w-[300px] absolute top-4 left-1/2 -translate-x-1/2' />
      <QuizCardSet className='w-[300px] h-[400px] bg-red-500 shadow-lg rounded-xl' />
      <QuizButtonSet className='absolute bottom-4 left-1/2 -translate-x-1/2' />
    </motion.div>
  )
}
