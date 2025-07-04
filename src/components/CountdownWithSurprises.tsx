import React, { useState, useEffect } from 'react'
import { Clock, Gift, Heart, Star, Sparkles } from 'lucide-react'

const CountdownWithSurprises: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [dailySurprise, setDailySurprise] = useState<{
    message: string
    quote: string
    fact: string
  } | null>(null)
  const [showSurprise, setShowSurprise] = useState(false)

  // Messages et surprises quotidiennes
  const surprises = [
    {
      message: "Saviez-vous que...",
      quote: "L'amour ne se voit pas avec les yeux, mais avec le cœur. - William Shakespeare",
      fact: "Chanelle et Rochinel se sont rencontrés un mardi pluvieux, mais leur sourire a illuminé toute la journée !"
    },
    {
      message: "Citation du jour",
      quote: "Être profondément aimé par quelqu'un vous donne de la force, tandis qu'aimer quelqu'un profondément vous donne du courage. - Lao Tzu",
      fact: "Le plat préféré de Chanelle est le ndolé, et celui de Rochinel est le poulet DG !"
    },
    {
      message: "Anecdote du couple",
      quote: "L'amour véritable ne finit jamais. - Anonyme",
      fact: "Leur première danse était sur 'Perfect' d'Ed Sheeran dans le salon de Chanelle !"
    },
    {
      message: "Le saviez-vous ?",
      quote: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé. - George Sand",
      fact: "Rochinel a demandé Chanelle en mariage avec une bague cachée dans un gâteau au chocolat !"
    },
    {
      message: "Tradition camerounaise",
      quote: "L'union fait la force. - Proverbe africain",
      fact: "Le mariage traditionnel camerounais inclut la cérémonie de la dot, symbole de respect et d'union entre les familles."
    }
  ]

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

    // Surprise quotidienne basée sur la date
    const today = new Date().getDate()
    const surpriseIndex = today % surprises.length
    setDailySurprise(surprises[surpriseIndex])

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      {/* Compte à rebours principal */}
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

        {/* Bouton surprise */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowSurprise(!showSurprise)}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Gift className="w-5 h-5" />
            <span>Surprise du jour</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Surprise quotidienne */}
      {showSurprise && dailySurprise && (
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg border border-purple-200 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-bold text-purple-800">{dailySurprise.message}</h3>
              <Star className="w-6 h-6 text-purple-600 ml-2" />
            </div>

            {/* Citation */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-rose-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">Citation d'amour</span>
                <Heart className="w-5 h-5 text-rose-500 ml-2" />
              </div>
              <p className="text-gray-800 italic text-lg">"{dailySurprise.quote}"</p>
            </div>

            {/* Anecdote */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">Anecdote du couple</span>
                <Sparkles className="w-5 h-5 text-pink-500 ml-2" />
              </div>
              <p className="text-gray-700">{dailySurprise.fact}</p>
            </div>

            <button
              onClick={() => setShowSurprise(false)}
              className="mt-4 text-purple-600 hover:text-purple-800 transition-colors text-sm"
            >
              Fermer la surprise
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountdownWithSurprises