import React, { useState } from 'react'
import { MapPin, Clock, Shirt, Car, Gift, Phone, ExternalLink, Navigation, Route, Map } from 'lucide-react'

const InfosUtiles: React.FC = () => {
  const [showDirections, setShowDirections] = useState(false)

  // Coordonnées exactes de Ndogpassi 3, Douala
  const venueCoordinates = {
    lat: 4.0614,
    lng: 9.7061
  }

  const venueAddress = "Ndogpassi 3, Douala, Cameroun"
  const venueAddressEncoded = encodeURIComponent(venueAddress)

  // URLs pour différentes applications de navigation
  const navigationUrls = {
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${venueCoordinates.lat},${venueCoordinates.lng}&travelmode=driving`,
    googleMapsWalk: `https://www.google.com/maps/dir/?api=1&destination=${venueCoordinates.lat},${venueCoordinates.lng}&travelmode=walking`,
    googleMapsTransit: `https://www.google.com/maps/dir/?api=1&destination=${venueCoordinates.lat},${venueCoordinates.lng}&travelmode=transit`,
    waze: `https://waze.com/ul?ll=${venueCoordinates.lat},${venueCoordinates.lng}&navigate=yes`,
    appleMaps: `http://maps.apple.com/?daddr=${venueCoordinates.lat},${venueCoordinates.lng}`,
    uber: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${venueCoordinates.lat}&dropoff[longitude]=${venueCoordinates.lng}&dropoff[nickname]=${venueAddressEncoded}`,
    bolt: `https://bolt.eu/en/book-ride/?pickup_latitude=current&pickup_longitude=current&destination_latitude=${venueCoordinates.lat}&destination_longitude=${venueCoordinates.lng}`
  }

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

          {/* Carte Google Maps Interactive avec Navigation */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Localisation & Navigation</h3>
            </div>
            
            {/* Carte interactive */}
            <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.823456789!2d${venueCoordinates.lng}!3d${venueCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnNDEuMCJOIDnCsDQyJzIyLjAiRQ!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm&maptype=roadmap&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ndogpassi 3, Douala - Lieu de réception"
              />
            </div>
            
            {/* Informations du lieu */}
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">📍 Adresse exacte</h4>
                <p className="text-gray-700 text-lg font-medium">{venueAddress}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Coordonnées GPS: {venueCoordinates.lat}, {venueCoordinates.lng}
                </p>
              </div>
            </div>

            {/* Boutons de navigation */}
            <div className="space-y-4">
              {/* Bouton principal pour afficher les options */}
              <div className="text-center">
                <button
                  onClick={() => setShowDirections(!showDirections)}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg font-semibold"
                >
                  <Navigation className="w-6 h-6" />
                  <span>Obtenir l'itinéraire</span>
                  <Route className="w-6 h-6" />
                </button>
              </div>

              {/* Options de navigation */}
              {showDirections && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {/* Google Maps - Voiture */}
                  <a
                    href={navigationUrls.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Car className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Google Maps</p>
                      <p className="text-sm opacity-90">En voiture</p>
                    </div>
                  </a>

                  {/* Google Maps - À pied */}
                  <a
                    href={navigationUrls.googleMapsWalk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Navigation className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Google Maps</p>
                      <p className="text-sm opacity-90">À pied</p>
                    </div>
                  </a>

                  {/* Google Maps - Transport en commun */}
                  <a
                    href={navigationUrls.googleMapsTransit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white p-4 rounded-xl hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Map className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Google Maps</p>
                      <p className="text-sm opacity-90">Transport public</p>
                    </div>
                  </a>

                  {/* Waze */}
                  <a
                    href={navigationUrls.waze}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-white p-4 rounded-xl hover:bg-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Route className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Waze</p>
                      <p className="text-sm opacity-90">Navigation GPS</p>
                    </div>
                  </a>

                  {/* Apple Maps */}
                  <a
                    href={navigationUrls.appleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white p-4 rounded-xl hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <MapPin className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Apple Maps</p>
                      <p className="text-sm opacity-90">iOS/Mac</p>
                    </div>
                  </a>

                  {/* Uber */}
                  <a
                    href={navigationUrls.uber}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-4 rounded-xl hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Car className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Uber</p>
                      <p className="text-sm opacity-90">Réserver course</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Conseils de navigation */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-xl p-4">
                <h5 className="font-bold text-amber-800 mb-2 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Temps de trajet estimé
                </h5>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Depuis l'aéroport: 25-35 min</li>
                  <li>• Depuis le centre-ville: 15-20 min</li>
                  <li>• Depuis Akwa: 20-25 min</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                <h5 className="font-bold text-orange-800 mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Points de repère
                </h5>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Proche du marché Ndogpassi</li>
                  <li>• À côté de l'école primaire</li>
                  <li>• Face à la pharmacie du quartier</li>
                </ul>
              </div>
            </div>

            {/* Note importante */}
            <div className="mt-6 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
              <p className="text-rose-800 text-sm text-center">
                💡 <strong>Conseil :</strong> Nous recommandons d'arriver 15 minutes avant le début de la cérémonie. 
                En cas de difficulté pour trouver le lieu, n'hésitez pas à nous appeler !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfosUtiles