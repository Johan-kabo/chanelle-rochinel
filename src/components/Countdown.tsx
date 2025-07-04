import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2025-07-14T14:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 shadow-xl text-white">
      <div className="flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 mr-3" />
        <h2 className="text-3xl font-bold">Compte à rebours</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm uppercase tracking-wide">Jours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm uppercase tracking-wide">Heures</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm uppercase tracking-wide">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm uppercase tracking-wide">Secondes</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown