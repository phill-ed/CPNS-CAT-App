"use client"

import { useSearchParams } from 'next/navigation'
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PaymentErrorPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('order_id')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Pembayaran Gagal
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Maaf, pembayaran Anda tidak berhasil. Silakan coba lagi.
          </p>

          {orderId && (
            <p className="text-sm text-gray-500 mb-6">
              Order ID: {orderId}
            </p>
          )}

          <div className="space-y-3">
            <Link
              href="/onboarding"
              className="block w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Coba Lagi</span>
            </Link>

            <a
              href="/"
              className="block w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Beranda</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
