'use client'
import React from 'react'
import { cn } from '@/lib/utils'

export default function ProgressBar({ className }: { className?: string }) {
  // TODO: get progress from state
  return (
    <div className={cn('h-2 bg-gray-200 rounded-full', className)}>
      <div className='h-full bg-blue-500 rounded-full transition-all duration-300' style={{ width: '50%' }}></div>
    </div>
  )
}
