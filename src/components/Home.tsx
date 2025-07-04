import React, { useState, useEffect } from 'react'
import { Heart, Calendar, MapPin, Sparkles, Star } from 'lucide-react'
import Countdown from './Countdown'
import PhotoModal from './PhotoModal'

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const photos = [
    {
      src: "/WhatsApp Image 2025-07-03 à 17.28.56_f8a16a25.jpg",
      alt: "Chanelle & Rochinel - Photo principale",
      title: "Notre amour grandit chaque jour",
      description: "Un moment de tendresse capturé pour l'éternité. Cette photo représente parfaitement notre complicité et notre bonheur d'être ensemble."
    },
    {
      src: "/WhatsApp Image 2025-07-03 à 17.28.56_43368bde.jpg",
      alt: "Chanelle & Rochinel - Moment complice",
      title: "Moments de complicité",
      description: "Ces instants de rire et de joie partagés montrent la force de notre lien et la beauté de notre relation."
    },
    {
      src: "/WhatsApp Image 2025-07-03 à 17.28.57_edb82eed.jpg",
      alt: "Chanelle & Rochinel - Sourires complices",
      title: "Sourires et bonheur",
      description: "Nos sourires en disent long sur notre bonheur. Chaque jour à vos côtés est une nouvelle raison de sourire."
    }
  ]

  const openModal = (photoIndex: number) => {
    setCurrentPhoto(photoIndex)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const previousPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowRight':
          nextPhoto()
          break
        case 'ArrowLeft':
          previousPhoto()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isModalOpen])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section avec photos du couple */}
          <div className="text-center mb-16">
            {/* Noms des mariés avec animation */}
            <div className="mb-12">
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 font-serif bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Chanelle
                </h1>
                <div className="absolute -top-2 -right-4 animate-pulse">
                  <Sparkles className="w-8 h-8 text-rose-400" />
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <div className="mx-6 relative">
                  <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 bg-rose-200 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
              
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-800 font-serif bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Rochinel
                </h1>
                <div className="absolute -top-2 -left-4 animate-pulse delay-300">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Galerie de photos du couple avec cadres de mariage élégants */}
            <div className="mb-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
                  <h3 className="text-3xl font-bold text-gray-800 font-serif">Nos plus beaux moments</h3>
                  <Star className="w-6 h-6 text-rose-500 ml-2 animate-pulse" />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
                <p className="text-gray-600 mt-4 text-lg">Cliquez sur une photo pour l'agrandir</p>
              </div>
              
              {/* Layout en mosaïque pour une meilleure visualisation */}
              <div className="space-y-8">
                {/* Photo principale avec cadre de mariage luxueux */}
                <div className="relative group max-w-5xl mx-auto cursor-pointer" onClick={() => openModal(0)}>
                  {/* Cadre extérieur décoratif */}
                  <div className="relative p-6 bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-[3rem] shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
                    {/* Motifs décoratifs aux coins */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-rose-300 rounded-tl-2xl"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-rose-300 rounded-tr-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-rose-300 rounded-bl-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-rose-300 rounded-br-2xl"></div>
                    
                    {/* Bordure dorée */}
                    <div className="relative p-4 bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-100 rounded-[2.5rem] shadow-inner">
                      {/* Cadre intérieur avec effet nacré */}
                      <div className="relative p-3 bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-[2rem] shadow-lg">
                        <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl transform transition-all duration-700 group-hover:shadow-2xl">
                          <img
                            src={photos[0].src}
                            alt={photos[0].alt}
                            className="w-full h-80 md:h-[28rem] object-cover object-center"
                          />
                          {/* Overlay gradient subtil */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 group-hover:from-black/30 transition-all duration-300"></div>
                          
                          {/* Indicateur de clic */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                              <Sparkles className="w-8 h-8 text-rose-500" />
                            </div>
                          </div>
                          
                          {/* Légende élégante */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-center border border-white/50 shadow-xl">
                              <p className="text-gray-800 font-semibold text-lg md:text-xl mb-2">
                                "Notre amour grandit chaque jour"
                              </p>
                              <div className="flex items-center justify-center space-x-2">
                                <Heart className="w-5 h-5 text-rose-500" />
                                <span className="text-rose-600 font-medium">Chanelle & Rochinel</span>
                                <Heart className="w-5 h-5 text-rose-500" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Effets de brillance */}
                          <div className="absolute top-6 right-6">
                            <div className="w-4 h-4 bg-white/60 rounded-full animate-ping"></div>
                          </div>
                          <div className="absolute top-12 right-12">
                            <Sparkles className="w-6 h-6 text-white/80 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photos secondaires avec cadres assortis */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Photo 2 - Cadre vintage rose */}
                  <div className="relative group cursor-pointer" onClick={() => openModal(1)}>
                    <div className="relative p-4 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      {/* Ornements décoratifs */}
                      <div className="absolute top-2 left-2 w-6 h-6">
                        <div className="w-full h-full border-2 border-rose-300 rounded-full"></div>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6">
                        <div className="w-full h-full border-2 border-rose-300 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 left-2 w-6 h-6">
                        <div className="w-full h-full border-2 border-rose-300 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-2 right-2 w-6 h-6">
                        <div className="w-full h-full border-2 border-rose-300 rounded-full"></div>
                      </div>
                      
                      {/* Bordure dorée fine */}
                      <div className="relative p-2 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl">
                        <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:shadow-xl">
                          <img
                            src={photos[1].src}
                            alt={photos[1].alt}
                            className="w-full h-64 md:h-80 object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent group-hover:from-purple-500/20 transition-all duration-300"></div>
                          
                          {/* Indicateur de clic */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                              <Sparkles className="w-6 h-6 text-purple-500" />
                            </div>
                          </div>
                          
                          {/* Badge décoratif */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                              <Heart className="w-4 h-4 text-rose-500" />
                            </div>
                          </div>
                          
                          {/* Légende */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 text-center border border-white/50">
                              <p className="text-gray-800 font-semibold text-sm md:text-base">
                                Moments de complicité
                              </p>
                              <div className="flex items-center justify-center mt-1">
                                <Sparkles className="w-4 h-4 text-purple-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Photo 3 - Cadre vintage violet */}
                  <div className="relative group cursor-pointer" onClick={() => openModal(2)}>
                    <div className="relative p-4 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      {/* Ornements décoratifs en forme de cœur */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <Heart className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                        <Heart className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                        <Heart className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                        <Heart className="w-4 h-4 text-purple-300" />
                      </div>
                      
                      {/* Bordure dorée fine */}
                      <div className="relative p-2 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl">
                        <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 group-hover:shadow-xl">
                          <img
                            src={photos[2].src}
                            alt={photos[2].alt}
                            className="w-full h-64 md:h-80 object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-all duration-300"></div>
                          
                          {/* Indicateur de clic */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                              <Sparkles className="w-6 h-6 text-rose-500" />
                            </div>
                          </div>
                          
                          {/* Badge décoratif */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                              <Star className="w-4 h-4 text-purple-500" />
                            </div>
                          </div>
                          
                          {/* Légende */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 text-center border border-white/50">
                              <p className="text-gray-800 font-semibold text-sm md:text-base">
                                Sourires et bonheur
                              </p>
                              <div className="flex items-center justify-center mt-1">
                                <Star className="w-4 h-4 text-rose-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message d'invitation embelli */}
            <div className="mb-12 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Motifs décoratifs */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="absolute top-4 left-4">
                    <Heart className="w-8 h-8 text-rose-500" />
                  </div>
                  <div className="absolute top-8 right-8">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="absolute bottom-4 left-8">
                    <Heart className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="absolute bottom-8 right-4">
                    <Heart className="w-10 h-10 text-rose-400" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-rose-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Notre Invitation</h3>
                    <Sparkles className="w-8 h-8 text-rose-500 ml-3" />
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "Nous avons l'immense joie de vous inviter à célébrer notre union.
                    Venez partager avec nous ce moment magique qui marquera le début
                    de notre nouvelle aventure à deux."
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-lg text-gray-600 font-medium">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <span>Votre présence sera notre plus beau cadeau</span>
                    <Sparkles className="w-5 h-5 text-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Détails du mariage avec design amélioré */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Date & Heure</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-700">Lundi 14 Juillet 2025</p>
                    <p className="text-lg text-gray-600">à partir de 14h00</p>
                    <div className="mt-4 p-3 bg-rose-50 rounded-xl">
                      <p className="text-sm text-rose-700 font-medium">
                        Cérémonie • Cocktail • Dîner • Soirée dansante
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Lieu de réception</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-gray-700">Ndogpassi 3</p>
                    <p className="text-lg text-gray-600">Douala, Cameroun</p>
                    <div className="mt-4 p-3 bg-purple-50 rounded-xl">
                      <a 
                        href="https://maps.app.goo.gl/PXMRTGVWcbUDGeCt8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-700 font-medium hover:text-purple-800 transition-colors flex items-center justify-center space-x-2"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>Voir sur Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compte à rebours */}
            <div className="transform transition-all duration-500 hover:scale-105">
              <Countdown />
            </div>
          </div>
        </div>
      </div>

      {/* Modal de galerie photo */}
      <PhotoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        currentPhoto={currentPhoto}
        onPrevious={previousPhoto}
        onNext={nextPhoto}
        photos={photos}
      />
    </section>
  )
}

export default Home