"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Mail, User, ArrowRight, CheckCircle } from 'lucide-react'

interface UserInfo {
  name: string
  email: string
  birthdate: string
  phone?: string
}

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    birthdate: '',
    phone: ''
  })
  const [selectedTest, setSelectedTest] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const tests = [
    { id: 'twk', name: 'TWK - Tes Wawasan Kebangsaan', duration: 100, questions: 110, price: 50000 },
    { id: 'tkp', name: 'TKP - Tes Karakteristik Pribadi', duration: 100, questions: 35, price: 50000 },
    { id: 'pu', name: 'PU - Tes Intelegensi Umum', duration: 100, questions: 65, price: 50000 },
    { id: 'all', name: 'Full Package (TWK + TKP + PU)', duration: 180, questions: 210, price: 100000 },
  ]

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!userInfo.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!userInfo.email.trim()) newErrors.email = 'Email wajib diisi'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    if (!userInfo.birthdate) newErrors.birthdate = 'Tanggal lahir wajib diisi'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = async () => {
    if (!selectedTest) return
    
    setLoading(true)
    
    // Create session and get payment URL
    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userInfo,
          testId: selectedTest
        })
      })
      
      const data = await response.json()
      
      if (data.paymentUrl) {
        // Redirect to Midtrans
        window.location.href = data.paymentUrl
      }
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`w-20 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
          </div>
        </div>

        {/* Step 1: User Information */}
        {step === 1 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Identitas Peserta
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Masukkan data diri Anda untuk memulai ujian
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Masukkan nama lengkap"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="email@contoh.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={userInfo.birthdate}
                  onChange={(e) => setUserInfo({ ...userInfo, birthdate: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                    errors.birthdate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                />
                {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nomor Telepon (opsional)
                </label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="081234567890"
                />
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Lanjutkan</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Select Test */}
        {step === 2 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Pilih Paket Ujian
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {userInfo.name}, pilih paket ujian yang ingin Anda ikuti
              </p>
            </div>

            <div className="space-y-4">
              {tests.map((test) => (
                <button
                  key={test.id}
                  onClick={() => setSelectedTest(test.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedTest === test.id
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {test.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {test.questions} soal • {test.duration} menit
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">
                        Rp {test.price.toLocaleString('id-ID')}
                      </div>
                      {selectedTest === test.id && (
                        <CheckCircle className="w-5 h-5 text-blue-600 ml-auto mt-1" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={handleSubmit}
                disabled={!selectedTest || loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Memproses...' : 'Bayar & Mulai Ujian'}
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Kembali
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                🔒 Pembaman, Anda akan diarahkan ke Midtrans untuk pembayaran yang aman
              </p>
            </div>
          </div>
        )}

        {/* Back to Home */}
        <a href="/" className="block mt-6 text-center text-sm text-gray-500 hover:text-gray-600">
          ← Kembali ke Beranda
        </a>
      </div>
    </div>
  )
}
