import React from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react'

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  currentPhoto: number
  onPrevious: () => void
  onNext: () => void
  photos: Array<{
    src: string
    alt: string
    title: string
    description: string
  }>
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onPrevious,
  onNext,
  photos
}) => {
  if (!isOpen) return null

  const photo = photos[currentPhoto]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay avec effet de flou */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation précédente */}
        <button
          onClick={onPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation suivante */}
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Contenu principal */}
        <div className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
          {/* Cadre photo élégant */}
          <div className="relative">
            {/* Cadre extérieur décoratif */}
            <div className="relative p-4 bg-gradient-to-br from-white/20 via-rose-50/20 to-pink-50/20 rounded-3xl backdrop-blur-md border border-white/30 shadow-2xl">
              {/* Ornements aux coins */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white/50 rounded-tl-xl"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-xl"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white/50 rounded-bl-xl"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white/50 rounded-bl-xl"></div>
              
              {/* Bordure dorée */}
              <div className="relative p-3 bg-gradient-to-br from-yellow-100/30 via-amber-50/30 to-yellow-100/30 rounded-2xl backdrop-blur-sm border border-yellow-200/50">
                {/* Image principale */}
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                  
                  {/* Effets de brillance */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-8 right-8">
                    <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informations de la photo */}
          <div className="mt-6 max-w-2xl text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-rose-400 mr-2" />
                <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                <Heart className="w-5 h-5 text-rose-400 ml-2" />
              </div>
              <p className="text-white/90 text-lg">{photo.description}</p>
              
              {/* Indicateur de position */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                {photos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentPhoto 
                        ? 'bg-rose-400 w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              Utilisez les flèches ou cliquez sur les côtés pour naviguer • Échap pour fermer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoModal