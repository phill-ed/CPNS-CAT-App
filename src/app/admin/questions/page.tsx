"use client"

import { useState } from 'react'
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Image as ImageIcon,
  Filter,
  ChevronDown
} from 'lucide-react'

// Sample questions
const sampleQuestions = [
  {
    id: 'q1',
    text: 'Siapa presiden pertama Indonesia?',
    category: 'TWK',
    subCategory: 'PANCASILA',
    difficulty: 'EASY',
    hasImage: false,
    usage: 1250
  },
  {
    id: 'q2',
    text: '[Gambar] Lanjutkan pola deret figural...',
    category: 'PU',
    subCategory: 'SERIAL',
    difficulty: 'MEDIUM',
    hasImage: true,
    usage: 890
  },
  {
    id: 'q3',
    text: 'Jika 2x + 5 = 15, berapakah x?',
    category: 'PU',
    subCategory: 'ARITHMETIC',
    difficulty: 'EASY',
    hasImage: false,
    usage: 2100
  },
]

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">CAT Admin</h1>
          <p className="text-sm text-gray-500">Assessment Platform</p>
        </div>
        
        <nav className="mt-6 px-4 space-y-1">
          <a href="/admin" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="/admin/tests" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
            <Target className="w-5 h-5" />
            <span>Tests</span>
          </a>
          <a href="/admin/questions" className="flex items-center space-x-3 px-4 py-3 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
            <Users className="w-5 h-5" />
            <span>Questions</span>
          </a>
          <a href="/admin/analytics" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <a href="/" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 dark:text-gray-400">
            <span>← Back to Home</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Question Bank
            </h1>
            <p className="text-gray-500">Manage all questions across categories</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" />
            <span>Add Question</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="TWK">TWK</option>
              <option value="TKP">TKP</option>
              <option value="PU">PU</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="all">All Difficulties</option>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </div>
        </div>

        {/* Questions Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difficulty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {sampleQuestions.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {q.hasImage && (
                        <ImageIcon className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="text-sm text-gray-900 dark:text-white truncate max-w-md">
                        {q.text}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      q.category === 'TWK' ? 'bg-red-100 text-red-700' :
                      q.category === 'TKP' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {q.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      q.difficulty === 'EASY' ? 'bg-green-100 text-green-700'ifficulty === 'MED :
                      q.dIUM' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {q.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {q.usage.toLocaleString()} times
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            Showing 1-10 of 175 questions
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">2</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">3</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
