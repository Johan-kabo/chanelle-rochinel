import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Heart } from 'lucide-react'

interface Song {
  title: string
  artist: string
  url: string
  duration: string
}

const AudioPlayer: React.FC = () => {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Playlist de chansons d'amour (URLs d'exemple - remplacez par vos vraies chansons)
  const playlist: Song[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "4:23"
    },
    {
      title: "All of Me",
      artist: "John Legend", 
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "4:29"
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      duration: "4:45"
    }
  ]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      // Passer à la chanson suivante automatiquement
      nextSong()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentSong])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    audio.muted = isMuted
  }, [volume, isMuted])

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

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length)
    setIsPlaying(false)
  }

  const previousSong = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return

    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const song = playlist[currentSong]

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 w-80">
        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={song.url}
          preload="auto"
          className="hidden"
        />

        {/* Info de la chanson */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-4 h-4 text-rose-500 mr-2" />
            <h4 className="font-bold text-gray-800 text-sm">{song.title}</h4>
            <Heart className="w-4 h-4 text-rose-500 ml-2" />
          </div>
          <p className="text-xs text-gray-600">{song.artist}</p>
        </div>

        {/* Barre de progression */}
        <div className="mb-4">
          <div 
            className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-100"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Contrôles */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={previousSong}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-rose-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          <button
            onClick={nextSong}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Contrôle du volume */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Indicateur de playlist */}
        <div className="text-center mt-3">
          <p className="text-xs text-gray-500">
            {currentSong + 1} / {playlist.length} - Playlist d'amour
          </p>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer