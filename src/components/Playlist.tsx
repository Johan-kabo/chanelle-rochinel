import React from 'react'
import { Music, ExternalLink } from 'lucide-react'

const Playlist: React.FC = () => {
  return (
    <section id="playlist" className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Playlist du mariage
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Music className="w-12 h-12 text-purple-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">
                Nos musiques préférées
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Découvrez la playlist qui accompagnera notre journée spéciale.
              Ces chansons racontent notre histoire et créeront l'ambiance parfaite
              pour célébrer notre amour.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 mr-3" />
                  <span className="text-xl font-bold">Spotify</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Écoutez notre playlist sur Spotify
                </p>
                <div className="flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>Ouvrir dans Spotify</span>
                </div>
              </a>

              <a
                href="https://music.youtube.com/playlist?list=PLrAl6rYGs9IMlTdNjKQhzJjjZdqoqVvuC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex items-center justify-center mb-4">
                  <Music className="w-8 h-8 mr-3" />
                  <span className="text-xl font-bold">YouTube Music</span>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Écoutez notre playlist sur YouTube Music
                </p>
                <div className="flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  <span>Ouvrir dans YouTube Music</span>
                </div>
              </a>
            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Quelques-uns de nos favoris :
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <p className="text-gray-700">• "Perfect" - Ed Sheeran</p>
                  <p className="text-gray-700">• "All of Me" - John Legend</p>
                  <p className="text-gray-700">• "A Thousand Years" - Christina Perri</p>
                  <p className="text-gray-700">• "Marry Me" - Train</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">• "Can't Help Myself" - Four Tops</p>
                  <p className="text-gray-700">• "I Want It That Way" - Backstreet Boys</p>
                  <p className="text-gray-700">• "Uptown Funk" - Mark Ronson ft. Bruno Mars</p>
                  <p className="text-gray-700">• "Happy" - Pharrell Williams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playlist