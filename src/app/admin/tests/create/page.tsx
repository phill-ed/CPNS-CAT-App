"use client"

import { useState } from 'react'
import { 
  Plus, 
  Trash2, 
  Save,
  ChevronDown,
  ChevronUp,
  Upload
} from 'lucide-react'

export default function CreateTestPage() {
  const [testData, setTestData] = useState({
    title: '',
    description: '',
    category: 'TWK',
    subCategory: '',
    duration: 100,
    totalQuestions: 10,
    passingScore: 60,
    shuffleQuestions: true,
    shuffleAnswers: true,
    showAnswers: true,
  })

  const [questions, setQuestions] = useState([
    { id: 1, text: '', options: ['', '', '', ''], correctAnswer: 0, explanation: '' }
  ])

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { 
        id: questions.length + 1, 
        text: '', 
        options: ['', '', '', ''], 
        correctAnswer: 0, 
        explanation: '' 
      }
    ])
  }

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  const handleSaveTest = async () => {
    // Save test to database
    console.log('Saving test:', { testData, questions })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Create New Test
          </h1>
          <button
            onClick={handleSaveTest}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Save className="w-5 h-5" />
            <span>Save Test</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Test Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Test Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Test Title
              </label>
              <input
                type="text"
                value={testData.title}
                onChange={(e) => setTestData({ ...testData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., TWK - Pancasila 2024"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={testData.category}
                onChange={(e) => setTestData({ ...testData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="TWK">TWK - Tes Wawasan Kebangsaan</option>
                <option value="TKP">TKP - Tes Karakteristik Pribadi</option>
                <option value="PU">PU - Tes Intelegensi Umum</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={testData.description}
                onChange={(e) => setTestData({ ...testData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows={3}
                placeholder="Describe the test..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={testData.duration}
                onChange={(e) => setTestData({ ...testData, duration: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Passing Score (%)
              </label>
              <input
                type="number"
                value={testData.passingScore}
                onChange={(e) => setTestData({ ...testData, passingScore: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={testData.shuffleQuestions}
                onChange={(e) => setTestData({ ...testData, shuffleQuestions: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Shuffle Questions</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={testData.shuffleAnswers}
                onChange={(e) => setTestData({ ...testData, shuffleAnswers: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Shuffle Answers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={testData.showAnswers}
                onChange={(e) => setTestData({ ...testData, showAnswers: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Show Answers After Test</span>
            </label>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Questions ({questions.length})
            </h2>
            <button
              onClick={handleAddQuestion}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="w-5 h-5" />
              <span>Add Question</span>
            </button>
          </div>

          {questions.map((question, qIndex) => (
            <div key={question.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  Question {qIndex + 1}
                </span>
                <button
                  onClick={() => handleRemoveQuestion(question.id)}
                  className="p-2 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Question Text
                  </label>
                  <textarea
                    value={question.text}
                    onChange={(e) => {
                      const updated = [...questions]
                      updated[qIndex].text = e.target.value
                      setQuestions(updated)
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={2}
                    placeholder="Enter your question..."
                  />
                </div>

                {/* Image Upload */}
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <Upload className="w-5 h-5" />
                      <span>Upload Image (optional)</span>
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Options (select correct answer)
                  </label>
                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <div key={oIndex} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={question.correctAnswer === oIndex}
                          onChange={() => {
                            const updated = [...questions]
                            updated[qIndex].correctAnswer = oIndex
                            setQuestions(updated)
                          }}
                          className="w-4 h-4 text-blue-600"
                        />
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => {
                            const updated = [...questions]
                            updated[qIndex].options[oIndex] = e.target.value
                            setQuestions(updated)
                          }}
                          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Explanation (optional)
                  </label>
                  <textarea
                    value={question.explanation}
                    onChange={(e) => {
                      const updated = [...questions]
                      updated[qIndex].explanation = e.target.value
                      setQuestions(updated)
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={2}
                    placeholder="Explain the correct answer..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
