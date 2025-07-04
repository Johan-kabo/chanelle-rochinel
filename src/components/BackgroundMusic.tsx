import React, { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // URL d'une belle chanson d'amour instrumentale
  const musicUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" // Placeholder - vous pouvez remplacer par votre chanson

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio.loop = true

    // Fonction pour démarrer la musique après interaction utilisateur
    const startMusic = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(console.error)
      }
    }

    // Écouter les interactions utilisateur pour démarrer la musique
    const events = ['click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, startMusic, { once: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startMusic)
      })
    }
  }, [hasInteracted, volume])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(console.error)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
      >
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Votre navigateur ne supporte pas l'audio HTML5.
      </audio>

      {/* Contrôles de musique flottants */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
          <div className="flex items-center space-x-3">
            {/* Bouton Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-rose-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            {/* Contrôle du volume */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors"
                title={isMuted ? "Activer le son" : "Couper le son"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                title="Volume"
              />
            </div>
          </div>

          {/* Indicateur de chanson */}
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-600 font-medium">
              🎵 Musique d'amour
            </p>
            {!hasInteracted && (
              <p className="text-xs text-gray-500 mt-1">
                Cliquez pour démarrer
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Styles CSS pour le slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #f43f5e, #ec4899);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #f43f5e, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-webkit-slider-track {
          background: #e5e7eb;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          background: #e5e7eb;
          border-radius: 4px;
          border: none;
        }
      `}</style>
    </>
  )
}

export default BackgroundMusic