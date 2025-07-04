import React from 'react'
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
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
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p>Chanelle: 06 12 34 56 78</p>
                <p>Rochinel: 06 87 65 43 21</p>
                <p>mariage@chanelle-rochinel.fr</p>
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