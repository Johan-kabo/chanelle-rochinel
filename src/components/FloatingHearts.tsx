import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

interface FloatingHeartsProps {
  trigger: boolean
  duration?: number
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ trigger, duration = 2000 }) => {
  const [hearts, setHearts] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    color: string
  }>>([])

  const colors = ['text-rose-400', 'text-pink-400', 'text-red-400', 'text-purple-400']

  useEffect(() => {
    if (!trigger) return

    // Créer les cœurs flottants
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 20,
      size: Math.random() * 20 + 15,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))

    setHearts(newHearts)

    // Animation des cœurs
    const animateHearts = () => {
      setHearts(prev => 
        prev.map(heart => ({
          ...heart,
          y: heart.y - 2,
          x: heart.x + Math.sin(heart.y * 0.01) * 0.5,
          opacity: heart.opacity - 0.01
        })).filter(heart => heart.opacity > 0 && heart.y > -50)
      )
    }

    const interval = setInterval(animateHearts, 16)

    const timeout = setTimeout(() => {
      setHearts([])
    }, duration)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [trigger, duration])

  if (hearts.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={`absolute ${heart.color}`}
          style={{
            left: heart.x,
            top: heart.y,
            opacity: heart.opacity,
            fontSize: heart.size
          }}
        >
          <Heart className="w-full h-full fill-current" />
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts