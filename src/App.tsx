import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import RSVPForm from './components/RSVPForm'
import Playlist from './components/Playlist'
import InfosUtiles from './components/InfosUtiles'
import Footer from './components/Footer'
import AdminView from './components/AdminView'
import BackgroundMusic from './components/BackgroundMusic'
import MusicNotification from './components/MusicNotification'

function App() {
  const [showMusicNotification, setShowMusicNotification] = useState(false)
  const [musicEnabled, setMusicEnabled] = useState(false)

  useEffect(() => {
    // Afficher la notification de musique après 2 secondes
    const timer = setTimeout(() => {
      setShowMusicNotification(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleMusicAccept = () => {
    setMusicEnabled(true)
    setShowMusicNotification(false)
  }

  const handleMusicDecline = () => {
    setMusicEnabled(false)
    setShowMusicNotification(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminView />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Home />
              <RSVPForm />
              <Playlist />
              <InfosUtiles />
            </main>
            <Footer />
            
            {/* Musique d'arrière-plan */}
            {musicEnabled && <BackgroundMusic />}
            
            {/* Notification pour la musique */}
            {showMusicNotification && (
              <MusicNotification
                onAccept={handleMusicAccept}
                onDecline={handleMusicDecline}
              />
            )}
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App