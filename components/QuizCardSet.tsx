'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import QuizCard from './QuizCard'

export default function QuizCardSet({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', bounce: 0.5, duration: 1, ease: "easeOut" }}
      className={cn('relative', className)} >
      <QuizCard />
      <QuizCard />
    </motion.div>
  )
}


