import React, { useState, useEffect } from 'react'
import { Music, X, Heart } from 'lucide-react'

interface MusicNotificationProps {
  onAccept: () => void
  onDecline: () => void
}

const MusicNotification: React.FC<MusicNotificationProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleAccept = () => {
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    setIsVisible(false)
    onDecline()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-4 transform animate-fade-in">
        <div className="text-center">
          {/* Icône musicale animée */}
          <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-soft">
            <Music className="w-10 h-10 text-white" />
          </div>

          {/* Titre avec cœurs */}
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-5 h-5 text-rose-500 mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">Ambiance romantique</h3>
            <Heart className="w-5 h-5 text-rose-500 ml-2" />
          </div>

          {/* Message */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Souhaitez-vous écouter une douce mélodie d'amour pendant que vous découvrez notre invitation ?
          </p>

          {/* Boutons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAccept}
              className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Music className="w-5 h-5" />
              <span>Oui, avec plaisir !</span>
            </button>
            
            <button
              onClick={handleDecline}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <X className="w-5 h-5" />
              <span>Non merci</span>
            </button>
          </div>

          {/* Note discrète */}
          <p className="text-xs text-gray-500 mt-4">
            Vous pourrez contrôler la musique à tout moment
          </p>
        </div>
      </div>
    </div>
  )
}

export default MusicNotification