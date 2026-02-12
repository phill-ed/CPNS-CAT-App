"use client"

import { useState, useEffect } from 'react'
import { Header, Hero, Footer } from "@/components"
import { ClipboardList, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const tests = [
    { id: '1', title: 'CPNS TWK 2024', category: 'TWK', questions: 110, duration: 100 },
    { id: '2', title: 'CPNS TKP 2024', category: 'TKP', questions: 35, duration: 100 },
    { id: '3', title: 'CPNS PU 2024', category: 'PU', questions: 30, duration: 100 },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Fitur Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bank Soal Lengkap
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ribuan soal latihan dengan kategori TWK, TKP, dan PU
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Simulasi CAT
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
               模拟真实考试环境，自动评分
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Analisis Hasil
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Lihat skor dan pembahasan soal dengan detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section id="tests" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Latihan CAT
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Pilih kategori latihan sesuai kebutuhan seleksi Anda
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {tests.map((test) => (
              <div
                key={test.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                    {test.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {test.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{test.questions} soal</span>
                  <span>{test.duration} menit</span>
                </div>

                <Link
                  href={`/test/${test.id}`}
                  className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <span>Mulai Latihan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">175+</div>
              <div className="text-blue-200">Soal Tersedia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-200">Kategori Ujian</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Gratis</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Akses Terbuka</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
