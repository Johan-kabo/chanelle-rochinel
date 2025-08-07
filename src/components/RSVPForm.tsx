import React, { useState } from 'react'
import { Send, Check, AlertCircle } from 'lucide-react'
import { submitRsvp } from '../lib/supabase'
import EmojiRSVP from './EmojiRSVP'
import ConfettiEffect from './ConfettiEffect'
import FloatingHearts from './FloatingHearts'
import QRCodeGenerator from './QRCodeGenerator'

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    will_attend: true,
    guest_count: 1,
    message: '',
    mood_emoji: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const [showHearts, setShowHearts] = useState(false)
  const [useEmojiForm, setUseEmojiForm] = useState(false)

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await submitRsvp(data)
      setSubmitStatus('success')
      setFormData({
        full_name: data.full_name,
        email: data.email,
        will_attend: data.will_attend,
        guest_count: data.guest_count,
        message: data.message,
        mood_emoji: data.mood_emoji || ''
      })
      
      // Déclencher les animations de célébration
      if (data.will_attend) {
        setShowConfetti(true)
        setTimeout(() => setShowHearts(true), 1000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTraditionalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseInt(value) || 1 : value
    }))
  }

  if (submitStatus === 'success') {
    return (
      <section id="rsvp" className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {formData.mood_emoji && <span className="mr-3 text-5xl">{formData.mood_emoji}</span>}
                Merci pour votre réponse !
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {formData.will_attend 
                  ? "Nous avons hâte de célébrer avec vous ! 🎉" 
                  : "Nous comprenons et vous remercions de nous avoir prévenus. 💕"
                }
              </p>
            </div>

            {/* QR Code personnel si présent */}
            {formData.will_attend && (
              <div className="mb-8">
                <QRCodeGenerator 
                  guestName={formData.full_name}
                  guestEmail={formData.email}
                />
              </div>
            )}

            {/* Message de confirmation personnalisé */}
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Récapitulatif de votre réponse
                </h3>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <p><strong>Nom :</strong> {formData.full_name}</p>
                  {formData.email && <p><strong>Email :</strong> {formData.email}</p>}
                  <p><strong>Présence :</strong> {formData.will_attend ? '✅ Présent(e)' : '❌ Absent(e)'}</p>
                  {formData.will_attend && (
                    <p><strong>Nombre d'invités :</strong> {formData.guest_count}</p>
                  )}
                  {formData.message && (
                    <div>
                      <strong>Votre message :</strong>
                      <p className="italic text-gray-600 mt-1">"{formData.message}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors transform hover:scale-105 shadow-lg"
              >
                Modifier ma réponse
              </button>
            </div>
          </div>
        </div>

        {/* Effets visuels */}
        <ConfettiEffect trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
        <FloatingHearts trigger={showHearts} />
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Confirmer votre présence
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Nous vous prions de bien vouloir confirmer votre présence avant le 1er août 2025
            </p>

            {/* Sélecteur de type de formulaire */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setUseEmojiForm(false)}
                className={`px-6 py-3 rounded-full transition-all duration-200 ${
                  !useEmojiForm 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Formulaire classique
              </button>
              <button
                onClick={() => setUseEmojiForm(true)}
                className={`px-6 py-3 rounded-full transition-all duration-200 flex items-center space-x-2 ${
                  useEmojiForm 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>Formulaire fun</span>
                <span className="text-lg">🎉</span>
              </button>
            </div>
          </div>

          {/* Formulaire avec emojis ou traditionnel */}
          {useEmojiForm ? (
            <EmojiRSVP onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          ) : (
            <form onSubmit={handleTraditionalSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
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
                      <span className="text-gray-700">Je serai présent(e)</span>
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
                      <span className="text-gray-700">Je ne pourrai pas venir</span>
                    </label>
                  </div>
                </div>

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
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message aux mariés (optionnel)
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

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-lg hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma réponse</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RSVPForm