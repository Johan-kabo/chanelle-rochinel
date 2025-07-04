import React from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <h1 className="text-xl font-bold text-gray-800">C & R</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('rsvp')}
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              RSVP
            </button>
            <button
              onClick={() => scrollToSection('playlist')}
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Playlist
            </button>
            <button
              onClick={() => scrollToSection('infos')}
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Infos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-rose-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-rose-500 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('rsvp')}
                className="text-left text-gray-700 hover:text-rose-500 transition-colors"
              >
                RSVP
              </button>
              <button
                onClick={() => scrollToSection('playlist')}
                className="text-left text-gray-700 hover:text-rose-500 transition-colors"
              >
                Playlist
              </button>
              <button
                onClick={() => scrollToSection('infos')}
                className="text-left text-gray-700 hover:text-rose-500 transition-colors"
              >
                Infos
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header