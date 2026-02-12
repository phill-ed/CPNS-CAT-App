"use client"

import { useState } from 'react'
import { Header, Hero, Footer } from "@/components"
import { 
  BookOpen, 
  Brain, 
  Calculator, 
  Eye, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Clock,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { categories } from '@/data/categories'

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('PU')

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'TWK': return <BookOpen className="w-6 h-6" />
      case 'TKP': return <Users className="w-6 h-6" />
      case 'PU': return <Brain className="w-6 h-6" />
      default: return <Brain className="w-6 h-6" />
    }
  }

  const getCategoryColor = (id: string) => {
    switch (id) {
      case 'TWK': return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
      case 'TKP': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
      case 'PU': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Tests/Categories Section */}
      <section id="tests" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kategori Ujian CAT
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Platform latihan soal lengkap untuk persiapan Seleksi CPNS dengan 
              kategori TWK, TKP, dan PU
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${getCategoryColor(category.id)}`}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedCategory === category.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50/50 dark:bg-gray-800/50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.subCategories.map((subCat) => (
                        <div
                          key={subCat.id}
                          className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            {subCat.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {subCat.description}
                          </p>
                          
                          {subCat.subSubCategories.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-xs font-medium text-gray-500 uppercase">
                                Sub-Kategori:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {subCat.subSubCategories.map((ssc) => (
                                  <span
                                    key={ssc.id}
                                    className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-600 dark:text-gray-400"
                                  >
                                    {ssc.supportsImages && (
                                      <Eye className="w-3 h-3 mr-1" />
                                    )}
                                    {ssc.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <Link
                            href={`/test/${category.id}/${subCat.id}`}
                            className="inline-flex items-center mt-3 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                          >
                            <span>Mulai Latihan</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Test Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Latihan Cepat
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TWK Card */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8" />
                <h3 className="text-xl font-bold">TWK</h3>
              </div>
              <p className="text-red-100 mb-4">
                Tes Wawasan Kebangsaan
              </p>
              <div className="flex items-center justify-between text-sm">
                <span>110 soal</span>
                <span>100 menit</span>
              </div>
              <Link
                href="/test/TWK"
                className="block mt-4 w-full py-2 bg-white text-red-600 rounded-lg text-center font-medium hover:bg-red-50 transition-colors"
              >
                Mulai TWK
              </Link>
            </div>

            {/* TKP Card */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8" />
                <h3 className="text-xl font-bold">TKP</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Tes Karakteristik Pribadi
              </p>
              <div className="flex items-center justify-between text-sm">
                <span>35 soal</span>
                <span>100 menit</span>
              </div>
              <Link
                href="/test/TKP"
                className="block mt-4 w-full py-2 bg-white text-purple-600 rounded-lg text-center font-medium hover:bg-purple-50 transition-colors"
              >
                Mulai TKP
              </Link>
            </div>

            {/* PU Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8" />
                <h3 className="text-xl font-bold">PU</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Tes Intelegensi Umum
              </p>
              <div className="flex items-center justify-between text-sm">
                <span>65 soal</span>
                <span>100 menit</span>
              </div>
              <Link
                href="/test/PU"
                className="block mt-4 w-full py-2 bg-white text-blue-600 rounded-lg text-center font-medium hover:bg-blue-50 transition-colors"
              >
                Mulai PU
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-4xl font-bold mb-2">11</div>
              <div className="text-blue-200">Sub-Kategori</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Gratis</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
