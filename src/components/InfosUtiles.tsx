import React from 'react'
import { MapPin, Clock, Shirt, Car, Gift, Phone, ExternalLink } from 'lucide-react'

const InfosUtiles: React.FC = () => {
  return (
    <section id="infos" className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Informations pratiques
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir pour notre grand jour
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Horaires</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Cérémonie</p>
                  <p className="text-gray-600">14h00 - 15h30</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Cocktail</p>
                  <p className="text-gray-600">15h30 - 17h00</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Dîner & Soirée</p>
                  <p className="text-gray-600">17h00 - 2h00</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Shirt className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Dress Code</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Tenue souhaitée</p>
                  <p className="text-gray-600">Chic & élégant</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Couleurs à éviter</p>
                  <p className="text-gray-600">Blanc et ivoire</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Conseil</p>
                  <p className="text-gray-600">Prévoir des chaussures confortables pour danser !</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Transport</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Parking</p>
                  <p className="text-gray-600">Disponible sur place</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Transports</p>
                  <p className="text-gray-600">Taxi, moto-taxi disponibles</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Localisation</p>
                  <p className="text-gray-600">Quartier Ndogpassi 3, Douala</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Gift className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Cadeaux</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">
                  Votre présence est notre plus beau cadeau !
                </p>
                <p className="text-gray-600">
                  Si vous souhaitez nous gâter, une participation
                  pour notre voyage de noces nous ferait très plaisir.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Une urne sera disponible sur place
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Contact</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Chanelle</p>
                  <p className="text-gray-600">06 12 34 56 78</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Rochinel</p>
                  <p className="text-gray-600">06 87 65 43 21</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Urgence le jour J</p>
                  <p className="text-gray-600">06 11 22 33 44</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Hébergement</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700">Hôtels recommandés</p>
                  <p className="text-gray-600">Hôtel Akwa Palace</p>
                  <p className="text-sm text-gray-500">Centre-ville Douala</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Alternative</p>
                  <p className="text-gray-600">Hôtel Ibis Douala</p>
                  <p className="text-sm text-gray-500">Proche aéroport</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Localisation - Ndogpassi 3</h3>
            </div>
            
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d9.7123456789!3d4.0123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMjguNCJOIDnCsDQyJzQ0LjQiRQ!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ndogpassi 3, Douala"
              />
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-gray-600 text-lg">
                📍 Ndogpassi 3, Douala, Cameroun
              </p>
              
              <a
                href="https://maps.app.goo.gl/PXMRTGVWcbUDGeCt8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="font-medium">Ouvrir dans Google Maps</span>
              </a>
              
              <div className="mt-4 p-4 bg-amber-50 rounded-xl">
                <p className="text-amber-800 text-sm">
                  💡 <strong>Conseil :</strong> Nous recommandons d'utiliser Google Maps ou Waze pour la navigation. 
                  Le quartier Ndogpassi 3 est bien desservi par les transports en commun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfosUtiles