"use client"

import { useParams, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Trophy, Home, RotateCcw, Download } from 'lucide-react'

export default function ResultsPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const categoryParam = params.id as string
  const correct = parseInt(searchParams.get('correct') || '0')
  const total = parseInt(searchParams.get('total') || '10')
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  const passed = percentage >= 60

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Result Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className={`py-8 px-6 text-center ${
            passed
              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
              : 'bg-gradient-to-r from-red-500 to-orange-600'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
              {passed ? (
                <Trophy className="w-10 h-10 text-white" />
              ) : (
                <span className="text-4xl">💪</span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {passed ? 'Selamat!' : 'Tetap Semangat!'}
            </h1>
            <p className="text-white/80">
              {passed ? 'Anda telah lulus ujian ini.' : 'Anda belum lulus, coba lagi ya!'}
            </p>
          </div>

          {/* Score */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeDasharray={`${Math.min(percentage * 4.4, 440)} 440`}
                    strokeLinecap="round"
                    className={passed ? 'text-green-500' : 'text-red-500'}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {percentage}%
                    </div>
                    <div className="text-sm text-gray-500">Skor Anda</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4 space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{correct}</div>
                <div className="text-sm text-gray-500">Benar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{total - correct}</div>
                <div className="text-sm text-gray-500">Salah</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">{total}</div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Detail Ujian
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-500">Kategori</div>
                <div className="font-medium text-gray-900 dark:text-white">{categoryParam}</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-500">Status</div>
                <div className={`font-medium ${passed ? 'text-green-500' : 'text-red-500'}`}>
                  {passed ? 'LULUS' : 'TIDAK LULUS'}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-500">Waktu</div>
                <div className="font-medium text-gray-900 dark:text-white">{total} menit</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div className="text-sm text-gray-500">Passing Grade</div>
                <div className="font-medium text-gray-900 dark:text-white">60%</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Beranda</span>
              </Link>

              <button
                onClick={() => router.push(`/test/${categoryParam}`)}
                className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Coba Lagi</span>
              </button>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Download className="w-5 h-5" />
              <span>Download Sertifikat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
