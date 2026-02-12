"use client"

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderId = searchParams.get('order_id')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verify payment and get/create session
    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/payment/status?order_id=${orderId}`)
        const data = await response.json()

        if (data.transactionStatus === 'settlement' || data.transactionStatus === 'capture') {
          // Payment successful - create session
          const sessionResponse = await fetch('/api/sessions/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId })
          })
          
          const sessionData = await sessionResponse.json()
          setSessionId(sessionData.sessionId)
        }
      } catch (error) {
        console.error('Verification error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (orderId) {
      verifyPayment()
    }
  }, [orderId])

  const handleStartTest = () => {
    if (sessionId) {
      router.push(`/test/${sessionId}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Memverifikasi pembayaran...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Pembayaran Berhasil!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Terima kasih telah melakukan pembayaran. Sekarang Anda dapat memulai ujian.
          </p>

          {orderId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {orderId}
            </p>
          )}

          <button
            onClick={handleStartTest}
            disabled={!sessionId}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <span>Mulai Ujian</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="/"
            className="block mt-4 text-sm text-gray-500 hover:text-gray-600"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  )
}
