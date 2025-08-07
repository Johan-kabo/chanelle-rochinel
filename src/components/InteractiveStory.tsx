import React, { useState } from 'react'
import { ChevronRight, Heart, Star, Calendar, MapPin, Sparkles } from 'lucide-react'

const InteractiveStory: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const storySteps = [
    {
      title: "Notre première rencontre",
      date: "Septembre 2020",
      content: "Tout a commencé par un regard échangé dans un café de Douala. Ce moment magique a changé nos vies à jamais.",
      image: "/WhatsApp Image 2025-07-03 à 17.28.56_f8a16a25.jpg",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Premier rendez-vous",
      date: "Octobre 2020", 
      content: "Notre premier dîner ensemble au restaurant 'Le Palmier'. Nous avons parlé jusqu'à tard dans la nuit, découvrant nos rêves communs.",
      image: "/WhatsApp Image 2025-07-03 à 17.28.56_43368bde.jpg",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "La demande en mariage",
      date: "Décembre 2024",
      content: "Sous les étoiles de Douala, Rochinel a demandé la main de Chanelle. Un moment inoubliable rempli d'émotion et de joie.",
      image: "/WhatsApp Image 2025-07-03 à 17.28.57_edb82eed.jpg",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Notre mariage",
      date: "09 Août 2025",
      content: "Aujourd'hui, nous vous invitons à célébrer avec nous le début de notre nouvelle aventure. Votre présence sera notre plus beau cadeau !",
      image: "/WhatsApp Image 2025-07-03 à 17.28.56_f8a16a25.jpg",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-400 to-blue-500"
    }
  ]

  const nextStep = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isVisible) {
    return (
      <div className="text-center mb-8">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:from-rose-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
        >
          <Heart className="w-6 h-6" />
          <span className="text-lg font-semibold">Découvrir notre histoire</span>
          <Sparkles className="w-6 h-6" />
        </button>
      </div>
    )
  }

  const step = storySteps[currentStep]

  return (
    <div className="mb-12">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
        {/* Indicateur de progression */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {storySteps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 w-8' 
                    : index < currentStep 
                      ? 'bg-rose-300' 
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenu de l'étape */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-20`}></div>
            <img
              src={step.image}
              alt={step.title}
              className="relative w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
              {step.icon}
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <div>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-medium mb-4`}>
                {step.date}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{step.content}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={previousStep}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                  currentStep === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transform hover:scale-105'
                }`}
              >
                Précédent
              </button>

              <span className="text-gray-500 font-medium">
                {currentStep + 1} / {storySteps.length}
              </span>

              {currentStep < storySteps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className={`px-6 py-3 bg-gradient-to-r ${step.color} text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2`}
                >
                  <span>Suivant</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Merci !</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveStory