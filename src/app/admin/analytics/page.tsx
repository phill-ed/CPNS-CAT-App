"use client"

import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Clock,
  Award,
  Target,
  Download
} from 'lucide-react'

// Sample evaluation data
const evaluationData = {
  totalAttempts: 4582,
  averageScore: 72.5,
  passRate: 68,
  averageTime: 45,
  scoreDistribution: [
    { range: '0-20%', count: 125, percentage: 3 },
    { range: '21-40%', count: 458, percentage: 10 },
    { range: '41-60%', count: 1283, percentage: 28 },
    { range: '61-80%', count: 1832, percentage: 40 },
    { range: '81-100%', count: 884, percentage: 19 },
  ],
  categoryPerformance: [
    { category: 'TWK', avgScore: 68, attempts: 2100 },
    { category: 'TKP', avgScore: 75, attempts: 1850 },
    { category: 'PU - Verbal', avgScore: 70, attempts: 1200 },
    { category: 'PU - Numerical', avgScore: 65, attempts: 980 },
    { category: 'PU - Figural', avgScore: 78, attempts: 750 },
  ],
  weeklyTrend: [
    { week: 'Week 1', avgScore: 68, attempts: 450 },
    { week: 'Week 2', avgScore: 70, attempts: 520 },
    { week: 'Week 3', avgScore: 72, attempts: 680 },
    { week: 'Week 4', avgScore: 74, attempts: 850 },
  ],
  topPerformers: [
    { name: 'Ahmad R.', score: 98, category: 'TWK', date: '2026-02-10' },
    { name: 'Siti N.', score: 96, category: 'PU', date: '2026-02-11' },
    { name: 'Budi D.', score: 95, category: 'TKP', date: '2026-02-09' },
  ],
  weakAreas: [
    { area: 'Sejarah Nasional', avgScore: 55, suggestions: 'Fokus pada peristiwa penting Indonesia' },
    { area: 'Deret Bilangan', avgScore: 58, suggestions: 'Latihan pola aritmatika dan geometri' },
    { area: 'Silogisme', avgScore: 60, suggestions: 'Pahami struktur premis dan kesimpulan' },
  ],
}

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar - Same as admin page */}
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
          <a href="/admin/questions" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
            <Users className="w-5 h-5" />
            <span>Questions</span>
          </a>
          <a href="/admin/analytics" className="flex items-center space-x-3 px-4 py-3 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
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
              Analytics & Evaluation
            </h1>
            <p className="text-gray-500">Track performance and user progress</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="w-5 h-5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-green-500 text-sm flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" /> +12%
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {evaluationData.totalAttempts.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Total Attempts</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-green-500 text-sm flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" /> +5%
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {evaluationData.averageScore}%
            </div>
            <div className="text-sm text-gray-500">Average Score</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-green-500 text-sm flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" /> +8%
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {evaluationData.passRate}%
            </div>
            <div className="text-sm text-gray-500">Pass Rate</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-red-500 text-sm flex items-center">
                <TrendingDown className="w-4 h-4 mr-1" /> -3%
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {evaluationData.averageTime}m
            </div>
            <div className="text-sm text-gray-500">Avg. Completion Time</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Score Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Score Distribution
            </h2>
            <div className="space-y-4">
              {evaluationData.scoreDistribution.map((item) => (
                <div key={item.range} className="flex items-center">
                  <div className="w-16 text-sm text-gray-500">{item.range}</div>
                  <div className="flex-1 mx-4">
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.percentage}%
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      ({item.count})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Performance by Category
            </h2>
            <div className="space-y-4">
              {evaluationData.categoryPerformance.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {cat.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {cat.avgScore}% ({cat.attempts.toLocaleString()} attempts)
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        cat.avgScore >= 70 ? 'bg-green-500' :
                        cat.avgScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${cat.avgScore}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weak Areas */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Areas for Improvement
            </h2>
            <div className="space-y-4">
              {evaluationData.weakAreas.map((area) => (
                <div key={area.area} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {area.area}
                    </h3>
                    <span className="text-sm font-medium text-red-500">
                      {area.avgScore}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    💡 {area.suggestions}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Performers
            </h2>
            <div className="space-y-3">
              {evaluationData.topPerformers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-600' :
                      index === 1 ? 'bg-gray-100 text-gray-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">{user.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-500">{user.score}%</div>
                    <div className="text-xs text-gray-500">{user.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
