"use client"

import { Search } from 'lucide-react'

export default function PaymentPendingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">⏳</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Menunggu Pembayaran
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Pembayaran Anda sedang diproses. Mohon tunggu sebentar.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Halaman ini akan diperbarui secara otomatis.
          </p>

          <a
            href="/"
            className="block w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  )
}
