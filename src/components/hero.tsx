"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                <span>CPNS Assessment Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Persiapan
                <span className="text-blue-600 dark:text-blue-400"> CAT</span>
                <br />
                Lebih Mudah
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                Platform latihan soal Computer Assisted Test (CAT) untuk seleksi
                CPNS dan ujian nasional Indonesia.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#tests"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>Mulai Latihan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>Pelajari Lebih Lanjut</span>
                </Link>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/phill-ed" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:tendaedwin.et@gmail.com" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">📝</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
