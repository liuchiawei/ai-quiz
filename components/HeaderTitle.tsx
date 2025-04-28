'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HeaderTitle({ isQuizActive, setIsQuizActive }: { isQuizActive: boolean, setIsQuizActive: (isQuizActive: boolean) => void }) {
  return (
    <motion.div className='w-full h-full p-20 flex flex-col items-center justify-center absolute top-0 left-0 z-20 gap-6'>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        custom={0}
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-gray-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans relative z-20 font-bold tracking-tight"
      >
        AIテスト
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        custom={1}
        transition={(i: number) => ({ duration: 0.5, ease: "easeOut", delay: 0.3 * i })}
        className='text-center text-gray-400 text-sm md:text-base lg:text-lg'
      >
        あなたの性格や趣味から、どのAIがあなたに最も合うかを診断します。
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        custom={2}
        transition={(i: number) => ({ duration: 0.5, ease: "easeOut", delay: 0.3 * i })}
        className='mt-8 cursor-pointer border border-white rounded-full backdrop-blur-xs text-gray-50 px-8 py-2 transition-all duration-300  hover:bg-white/10 hover:text-white' onClick={() => setIsQuizActive(true)}>START</motion.button>
    </motion.div>
  )
}
