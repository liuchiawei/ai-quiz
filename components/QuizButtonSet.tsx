'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Circle, X } from 'lucide-react'

export default function QuizButtonSet({ className }: { className?: string }) {
  const handleSwipe = (dir: 'left' | 'right') => {
    console.log(dir)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn('flex items-center justify-center gap-4 *:cursor-pointer *:rounded-full *:border-none *:size-14', className)}>
      <Button variant='outline' size='icon' onClick={() => handleSwipe('left')}>
        <X />
      </Button>
      <Button variant='outline' size='icon' onClick={() => handleSwipe('right')}>
        <Circle />
      </Button>
    </motion.div>
  )
}
