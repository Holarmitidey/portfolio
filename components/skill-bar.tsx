"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level)
    }, delay)

    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}
