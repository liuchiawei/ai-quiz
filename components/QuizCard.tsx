'use client'

import { useState } from 'react'
import TinderCard from 'react-tinder-card'

export default function QuizCard({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // TODO: if not finished, currenIndex + 1
  const loadNextQuiz = '';
  // TODO: +/- score by dir 
  const handleSwipe = '';

  return (
    <TinderCard className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-xl cursor-grab active:cursor-grabbing flex flex-col items-center justify-center overflow-hidden' onSwipe={(dir) => setCurrentIndex(currentIndex + 1)}>
      <div className='w-full h-full bg-blue-500'>
        Image Here
      </div>
      <div className='w-full h-full flex items-center justify-center select-none bg-red-500'>
        <h1>Quiz</h1>
      </div>
    </TinderCard>
  )
}
