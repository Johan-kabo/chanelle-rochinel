import React from 'react'
import { Heart, Instagram, Facebook, Twitter, Phone, MessageCircle } from 'lucide-react'

const Footer: React.FC = () => {
  // Informations de contact
  const contacts = {
    chanelle: {
      name: "Chanelle",
      phone: "+237652257129",
      phoneDisplay: "+237 6 52 25 71 29",
      whatsapp: "+237652257129"
    },
    rochinel: {
      name: "Rochinel", 
      phone: "+237687654321",
      phoneDisplay: "+237 6 87 65 43 21",
      whatsapp: "+237687654321"
    }
  }

  // Fonctions pour les actions de contact
  const makeCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const sendWhatsApp = (phoneNumber: string, contactName: string) => {
    const message = encodeURIComponent(`Bonjour ${contactName}, je vous contacte concernant votre mariage du 14 juillet 2025. `)
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-rose-400 mr-3" />
            <h3 className="text-2xl font-bold">Chanelle & Rochinel</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Notre histoire</h4>
              <p className="text-gray-300 text-sm">
                Depuis notre première rencontre, nous savions que notre amour était unique.
                Merci de faire partie de notre aventure !
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact rapide</h4>
              <div className="space-y-3">
                {/* Contact Chanelle */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-300 mb-2">{contacts.chanelle.name}: {contacts.chanelle.phoneDisplay}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => makeCall(contacts.chanelle.phone)}
                      className="flex-1 bg-green-600 text-white py-1 px-2 rounded text-xs hover:bg-green-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Appeler</span>
                    </button>
                    <button
                      onClick={() => sendWhatsApp(contacts.chanelle.whatsapp, contacts.chanelle.name)}
                      className="flex-1 bg-green-700 text-white py-1 px-2 rounded text-xs hover:bg-green-800 transition-colors flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Contact Rochinel */}
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-300 mb-2">{contacts.rochinel.name}: {contacts.rochinel.phoneDisplay}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => makeCall(contacts.rochinel.phone)}
                      className="flex-1 bg-blue-600 text-white py-1 px-2 rounded text-xs hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Appeler</span>
                    </button>
                    <button
                      onClick={() => sendWhatsApp(contacts.rochinel.whatsapp, contacts.rochinel.name)}
                      className="flex-1 bg-green-700 text-white py-1 px-2 rounded text-xs hover:bg-green-800 transition-colors flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Chanelle & Rochinel. Tous droits réservés.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/admin" className="text-gray-400 hover:text-white transition-colors">
                  Admin
                </a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">
                  Créé avec ❤️ pour notre mariage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer