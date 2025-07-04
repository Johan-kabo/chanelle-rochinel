import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import RSVPForm from './components/RSVPForm'
import Playlist from './components/Playlist'
import InfosUtiles from './components/InfosUtiles'
import Footer from './components/Footer'
import AdminView from './components/AdminView'

function App() {
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
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App