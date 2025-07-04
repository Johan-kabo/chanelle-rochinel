import React, { useState } from 'react'
import { Send, Heart, PartyPopper, Sparkles, Star } from 'lucide-react'

interface EmojiRSVPProps {
  onSubmit: (data: any) => void
  isSubmitting: boolean
}

const EmojiRSVP: React.FC<EmojiRSVPProps> = ({ onSubmit, isSubmitting }) => {
  const [selectedMood, setSelectedMood] = useState('')
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    will_attend: true,
    guest_count: 1,
    message: '',
    mood_emoji: ''
  })

  const moodOptions = [
    { emoji: '🥳', label: 'Super excité(e) !', message: 'Je ne tiens plus en place !' },
    { emoji: '😍', label: 'Tellement heureux/se', message: 'Vous êtes adorables ensemble !' },
    { emoji: '🎉', label: 'Prêt(e) à faire la fête', message: 'On va danser toute la nuit !' },
    { emoji: '💕', label: 'Ému(e) aux larmes', message: 'Votre amour me touche énormément' },
    { emoji: '🌟', label: 'Inspiré(e) par votre amour', message: 'Vous êtes un exemple pour nous tous' },
    { emoji: '🎊', label: 'Impatient(e) de célébrer', message: 'Vivement le grand jour !' }
  ]

  const handleMoodSelect = (mood: typeof moodOptions[0]) => {
    setSelectedMood(mood.emoji)
    setFormData(prev => ({
      ...prev,
      mood_emoji: mood.emoji,
      message: prev.message || mood.message
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData, mood_emoji: selectedMood })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) || 1 : value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
      <div className="space-y-6">
        {/* Sélection d'humeur avec emojis */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Comment vous sentez-vous à propos de notre mariage ? ✨
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {moodOptions.map((mood) => (
              <button
                key={mood.emoji}
                type="button"
                onClick={() => handleMoodSelect(mood)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${
                  selectedMood === mood.emoji
                    ? 'border-rose-500 bg-rose-50 shadow-lg'
                    : 'border-gray-200 hover:border-rose-300 hover:bg-rose-25'
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-xs text-gray-600 font-medium">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Nom complet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Votre nom complet"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email (optionnel)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="votre@email.com"
          />
        </div>

        {/* Présence */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Présence *
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="will_attend"
                value="true"
                checked={formData.will_attend === true}
                onChange={() => setFormData(prev => ({ ...prev, will_attend: true }))}
                className="mr-2 text-rose-500"
              />
              <span className="text-gray-700 flex items-center">
                <span className="mr-2">🎉</span>
                Je serai présent(e)
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="will_attend"
                value="false"
                checked={formData.will_attend === false}
                onChange={() => setFormData(prev => ({ ...prev, will_attend: false }))}
                className="mr-2 text-rose-500"
              />
              <span className="text-gray-700 flex items-center">
                <span className="mr-2">😢</span>
                Je ne pourrai pas venir
              </span>
            </label>
          </div>
        </div>

        {/* Nombre d'invités */}
        {formData.will_attend && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre d'invités (vous inclus) *
            </label>
            <select
              name="guest_count"
              value={formData.guest_count}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'personne' : 'personnes'} 
                  {num === 1 ? ' 👤' : num === 2 ? ' 👫' : ' 👨‍👩‍👧‍👦'}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message personnalisé */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message aux mariés {selectedMood && <span className="text-lg">{selectedMood}</span>}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Votre message aux mariés..."
          />
        </div>

        {/* Bouton de soumission avec animation */}
        <button
          type="submit"
          disabled={isSubmitting || !selectedMood}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-6 rounded-lg hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-3 text-lg font-semibold transform hover:scale-105 shadow-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              <span>Envoyer ma réponse</span>
              {selectedMood && <span className="text-2xl">{selectedMood}</span>}
            </>
          )}
        </button>

        {!selectedMood && (
          <p className="text-center text-sm text-gray-500">
            Choisissez votre humeur pour continuer ! 😊
          </p>
        )}
      </div>
    </form>
  )
}

export default EmojiRSVP