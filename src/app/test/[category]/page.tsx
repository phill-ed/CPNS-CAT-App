"use client"

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Send, Image as ImageIcon } from 'lucide-react'
import { questions } from '@/data/questions'
import Link from 'next/link'

interface Question {
  id: string
  text: string
  imageUrl?: string
  points: number
  answers: { id: string; text: string; isCorrect?: boolean }[]
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const categoryParam = params.category as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeRemaining, setTimeRemaining] = useState(600)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [started, setStarted] = useState(false)

  // Filter questions by category
  const testQuestions: Question[] = questions
    .filter(q => q.category === categoryParam)
    .map(q => ({
      id: q.id,
      text: q.text,
      imageUrl: q.imageUrl,
      points: q.points,
      answers: [
        { id: 'a', text: 'Pilihan A' },
        { id: 'b', text: 'Pilihan B' },
        { id: 'c', text: 'Pilihan C' },
        { id: 'd', text: 'Pilihan D' }
      ]
    }))

  const displayQuestions: Question[] = testQuestions.length > 0 ? testQuestions : [
    {
      id: 'sample-1',
      text: `Contoh soal untuk ${categoryParam}`,
      points: 1,
      answers: [
        { id: 'a', text: 'Pilihan A' },
        { id: 'b', text: 'Pilihan B' },
        { id: 'c', text: 'Pilihan C' },
        { id: 'd', text: 'Pilihan D' }
      ]
    },
    {
      id: 'sample-2',
      text: 'Soal kedua',
      points: 1,
      answers: [
        { id: 'a', text: 'Pilihan A' },
        { id: 'b', text: 'Pilihan B' },
        { id: 'c', text: 'Pilihan C' },
        { id: 'd', text: 'Pilihan D' }
      ]
    }
  ]

  const testInfo = {
    title: `${categoryParam} - Practice Test`,
    duration: categoryParam === 'TWK' ? 100 : categoryParam === 'TKP' ? 100 : 65,
    totalQuestions: displayQuestions.length
  }

  const handleStart = () => {
    setStarted(true)
    setTimeRemaining(testInfo.duration * 60)
  }

  useEffect(() => {
    if (!started) return
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [started])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const answeredCount = Object.keys(answers).length
    router.push(`/results/${categoryParam}?correct=${answeredCount}&total=${displayQuestions.length}`)
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {testInfo.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {testInfo.totalQuestions} soal • {testInfo.duration} menit
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Soal</span>
              <span className="font-medium">{testInfo.totalQuestions} pertanyaan</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Waktu</span>
              <span className="font-medium">{testInfo.duration} menit</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Passing Grade</span>
              <span className="font-medium">60%</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Mulai Ujian
          </button>

          <Link href="/" className="block mt-4 text-sm text-gray-500 hover:text-gray-600">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    )
  }

  const question = displayQuestions[currentQuestion]
  const answeredCount = Object.keys(answers).length
  const progress = (answeredCount / displayQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {testInfo.title}
            </h1>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              timeRemaining < 60 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}>
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {answeredCount} dari {testInfo.totalQuestions} soal dijawab
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {displayQuestions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors ${
                index === currentQuestion
                  ? 'bg-blue-600 text-white'
                  : answers[q.id]
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 lg:p-8">
          <div className="mb-6">
            <span className="text-sm text-gray-500">{currentQuestion + 1} dari {testInfo.totalQuestions}</span>
          </div>

          <h2 className="text-xl text-gray-900 dark:text-white mb-6">{question.text}</h2>

          {question.imageUrl && (
            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Gambar: {question.imageUrl}</span>
            </div>
          )}

          <div className="space-y-3">
            {question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(question.id, answer.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  answers[question.id] === answer.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    answers[question.id] === answer.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}>
                    {answers[question.id] === answer.id && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-lg">{answer.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Sebelumnya</span>
          </button>

          {currentQuestion === displayQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Kirim Jawaban</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion((prev) => Math.min(displayQuestions.length - 1, prev + 1))}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
