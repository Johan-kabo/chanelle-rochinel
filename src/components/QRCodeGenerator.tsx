import React, { useState, useEffect } from 'react'
import { QrCode, Download, Share2, Copy, Check } from 'lucide-react'

interface QRCodeGeneratorProps {
  guestName: string
  guestEmail?: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ guestName, guestEmail }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [copied, setCopied] = useState(false)

  // Générer les données du QR code
  const qrData = {
    event: "Mariage Chanelle & Rochinel",
    date: "2025-08-09",
    guest: guestName,
    email: guestEmail,
    venue: "Bobongo et Ndogpassi 3, Douala",
    checkInCode: `CR2025-${Date.now().toString(36).toUpperCase()}`
  }

  const qrString = JSON.stringify(qrData)

  useEffect(() => {
    // Générer le QR code en utilisant une API gratuite
    const generateQRCode = async () => {
      try {
        const encodedData = encodeURIComponent(qrString)
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}&bgcolor=ffffff&color=000000&format=png&margin=10`
        setQrCodeUrl(qrUrl)
      } catch (error) {
        console.error('Erreur lors de la génération du QR code:', error)
      }
    }

    if (guestName) {
      generateQRCode()
    }
  }, [guestName, qrString])

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return

    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = `QR-Code-Mariage-${guestName.replace(/\s+/g, '-')}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrData.checkInCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Erreur lors de la copie:', error)
    }
  }

  const shareQRCode = async () => {
    if (navigator.share && qrCodeUrl) {
      try {
        await navigator.share({
          title: 'Mon QR Code - Mariage Chanelle & Rochinel',
          text: `Voici mon QR code pour le mariage de Chanelle & Rochinel le 14 juillet 2025`,
          url: qrCodeUrl
        })
      } catch (error) {
        console.error('Erreur lors du partage:', error)
      }
    }
  }

  if (!guestName) return null

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-100">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <QrCode className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-800">Votre QR Code personnel</h3>
        </div>

        <p className="text-gray-600 mb-6">
          Présentez ce QR code à l'entrée pour un check-in rapide le jour du mariage
        </p>

        {/* QR Code */}
        {qrCodeUrl && (
          <div className="bg-white p-4 rounded-xl shadow-md mb-6 inline-block">
            <img
              src={qrCodeUrl}
              alt="QR Code personnel"
              className="w-48 h-48 mx-auto"
            />
          </div>
        )}

        {/* Informations du code */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Informations du code :</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Invité :</strong> {guestName}</p>
            {guestEmail && <p><strong>Email :</strong> {guestEmail}</p>}
            <div className="flex items-center justify-center space-x-2 mt-2">
              <p><strong>Code :</strong> {qrData.checkInCode}</p>
              <button
                onClick={copyToClipboard}
                className="p-1 text-purple-600 hover:text-purple-800 transition-colors"
                title="Copier le code"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={downloadQRCode}
            className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger</span>
          </button>

          {navigator.share && (
            <button
              onClick={shareQRCode}
              className="flex-1 bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"
            >
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          )}
        </div>

        <div className="mt-4 p-3 bg-purple-100 rounded-lg">
          <p className="text-xs text-purple-800">
            💡 <strong>Astuce :</strong> Sauvegardez ce QR code dans vos photos ou imprimez-le. 
            Il vous permettra un accès rapide le jour du mariage !
          </p>
        </div>
      </div>
    </div>
  )
}

export default QRCodeGenerator