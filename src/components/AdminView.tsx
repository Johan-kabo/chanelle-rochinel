import React, { useState, useEffect } from 'react'
import { Lock, Users, CheckCircle, XCircle, Mail, MessageCircle, Eye, EyeOff } from 'lucide-react'
import { getRsvpResponses, type RsvpData } from '../lib/supabase'

const AdminView: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [responses, setResponses] = useState<RsvpData[]>([])
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [stats, setStats] = useState({
    total: 0,
    attending: 0,
    notAttending: 0,
    totalGuests: 0
  })

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === adminPassword) {
      setIsAuthenticated(true)
      loadResponses()
    } else {
      alert('Mot de passe incorrect')
    }
  }

  const loadResponses = async () => {
    setLoading(true)
    try {
      const data = await getRsvpResponses()
      setResponses(data)
      
      // Calculate stats
      const attending = data.filter(r => r.will_attend).length
      const notAttending = data.filter(r => !r.will_attend).length
      const totalGuests = data.reduce((sum, r) => sum + (r.will_attend ? r.guest_count : 0), 0)
      
      setStats({
        total: data.length,
        attending,
        notAttending,
        totalGuests
      })
    } catch (error) {
      console.error('Error loading responses:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Accès Administrateur
                </h2>
                <p className="text-gray-600">
                  Entrez le mot de passe pour accéder aux réponses RSVP
                </p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent pr-12"
                      placeholder="Entrez le mot de passe"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 px-6 rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all duration-200"
                >
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dashboard Admin - Réponses RSVP
            </h2>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Se déconnecter
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total réponses</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Présents</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.attending}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <XCircle className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Absents</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.notAttending}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total invités</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.totalGuests}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Responses Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">
                  Toutes les réponses
                </h3>
                <button
                  onClick={loadResponses}
                  disabled={loading}
                  className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Chargement...' : 'Actualiser'}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Présence
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Invités
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {responses.map((response) => (
                    <tr key={response.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {response.full_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {response.email ? (
                            <>
                              <Mail className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-sm text-gray-600">{response.email}</span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-400">Non renseigné</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {response.will_attend ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mr-2" />
                          )}
                          <span className={`text-sm ${response.will_attend ? 'text-green-600' : 'text-red-600'}`}>
                            {response.will_attend ? 'Présent' : 'Absent'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {response.will_attend ? response.guest_count : 0}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start">
                          {response.message ? (
                            <>
                              <MessageCircle className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 max-w-xs truncate">
                                {response.message}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-400">Aucun message</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {response.created_at && formatDate(response.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {responses.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucune réponse RSVP pour le moment</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminView