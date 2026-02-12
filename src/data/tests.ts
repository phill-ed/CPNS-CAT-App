import { Test } from '@/types'

export const tests: Test[] = [
  // TWK Tests
  {
    id: 'twk-1',
    title: 'CPNS TWK - Pancasila & UUD 1945',
    description: 'Tes pengetahuan dasar negara Indonesia tentang Pancasila dan UUD 1945',
    category: 'TWK',
    subCategory: 'PANCASILA',
    duration: 100,
    totalQuestions: 20,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'twk-2',
    title: 'CPNS TWK - Sejarah Nasional',
    description: 'Tes peristiwa penting dalam sejarah Indonesia',
    category: 'TWK',
    subCategory: 'SEJARAH',
    duration: 100,
    totalQuestions: 25,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'twk-3',
    title: 'CPNS TWK - Kewarganegaraan',
    description: 'Tes tentang sistem pemerintahan dan kewarganegaraan Indonesia',
    category: 'TWK',
    subCategory: 'GOV',
    duration: 100,
    totalQuestions: 30,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  // TKP Tests
  {
    id: 'tkp-1',
    title: 'CPNS TKP - Integritas & Kerja Sama',
    description: 'Tes karakteristik pribadi untuk seleksi CPNS',
    category: 'TKP',
    duration: 100,
    totalQuestions: 35,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: false,
    createdAt: new Date()
  },
  // PU Tests
  {
    id: 'pu-analogy-1',
    title: 'PU - Verbal (Analogi)',
    description: 'Tes kemampuan verbal: menemukan hubungan antara dua kata',
    category: 'PU',
    subCategory: 'VERBAL',
    subSubCategory: 'ANALOGY',
    duration: 50,
    totalQuestions: 15,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-syllogism-1',
    title: 'PU - Verbal (Silogisme)',
    description: 'Tes penalaran logis dengan silogisme',
    category: 'PU',
    subCategory: 'VERBAL',
    subSubCategory: 'SYLLOGISM',
    duration: 50,
    totalQuestions: 10,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-arithmetic-1',
    title: 'PU - Numerik (Aritmatika)',
    description: 'Tes kemampuan numerik: operasi aritmatika dasar',
    category: 'PU',
    subCategory: 'NUMERICAL',
    subSubCategory: 'ARITHMETIC',
    duration: 50,
    totalQuestions: 15,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-series-1',
    title: 'PU - Numerik (Deret Bilangan)',
    description: 'Tes kemampuan numerik: pola deret bilangan',
    category: 'PU',
    subCategory: 'NUMERICAL',
    subSubCategory: 'NUMBER_SERIES',
    duration: 40,
    totalQuestions: 10,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-figural-1',
    title: 'PU - Figural (Analogi)',
    description: 'Tes kemampuan figural: analogi gambar',
    category: 'PU',
    subCategory: 'FIGURAL',
    subSubCategory: 'FIGURAL_ANALOGY',
    duration: 40,
    totalQuestions: 10,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  },
  {
    id: 'pu-odd-one-out-1',
    title: 'PU - Figural (Mencari Beda)',
    description: 'Tes kemampuan figural: menemukan gambar yang berbeda',
    category: 'PU',
    subCategory: 'FIGURAL',
    subSubCategory: 'ODD_ONE_OUT',
    duration: 30,
    totalQuestions: 10,
    passingScore: 60,
    isActive: true,
    shuffleQuestions: true,
    shuffleAnswers: true,
    createdAt: new Date()
  }
]

// Helper function to get tests by category
export function getTestsByCategory(category: string): Test[] {
  return tests.filter(t => t.category === category)
}

// Helper function to get test by ID
export function getTestById(id: string): Test | undefined {
  return tests.find(t => t.id === id)
}
