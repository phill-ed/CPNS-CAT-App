// CAT App Types - Complete TypeScript Definitions

export interface User {
  id: string
  email: string
  name: string
  role: 'ADMIN' | 'USER'
  createdAt: Date
}

export interface Test {
  id: string
  title: string
  description: string
  category: TestCategory
  subCategory?: string
  subSubCategory?: string
  duration: number // in minutes
  totalQuestions: number
  passingScore: number
  isActive: boolean
  shuffleQuestions: boolean
  shuffleAnswers: boolean
  createdAt: Date
}

export type TestCategory = 'TWK' | 'TKP' | 'PU'

// PU Sub-Sub Categories
export type PUSubSubCategory = 
  | 'ANALOGY'           // Verbal - Analogy
  | 'SYLLOGISM'         // Verbal - Syllogism
  | 'ANALYTICAL'        // Verbal - Analytical Reasoning
  | 'ARITHMETIC'        // Numerical - Arithmetic
  | 'NUMBER_SERIES'     // Numerical - Number Series
  | 'QUANTITATIVE_COMP' // Numerical - Quantitative Comparison
  | 'WORD_PROBLEMS'     // Numerical - Word Problems
  | 'FIGURAL_ANALOGY'   // Figural - Figural Analogy
  | 'ODD_ONE_OUT'       // Figural - Differences
  | 'SERIAL'            // Figural - Serial

export interface Question {
  id: string
  text: string
  imageUrl?: string // For figural questions
  explanation?: string
  difficulty: 'EASY' | 'MEDIUM' | 'HARD'
  category: TestCategory
  subSubCategory?: PUSubSubCategory
  points: number
  testId?: string
  createdAt: Date
}

export interface Answer {
  id: string
  text: string
  imageUrl?: string // For figural answers
  isCorrect: boolean
  questionId: string
}

export interface TestSession {
  id: string
  userId: string
  testId: string
  status: 'IN_PROGRESS' | 'COMPLETED' | 'TIMED_OUT'
  score?: number
  correctAnswers: number
  wrongAnswers: number
  timeSpent?: number // in seconds
  startedAt: Date
  completedAt?: Date
}

export interface UserAnswer {
  id: string
  sessionId: string
  questionId: string
  selectedAnswerId: string
  isCorrect: boolean
  answeredAt: Date
}

// Category Structure for UI
export interface CategoryInfo {
  id: TestCategory
  name: string
  description: string
  subCategories: SubCategoryInfo[]
}

export interface SubCategoryInfo {
  id: string
  name: string
  description: string
  subSubCategories: SubSubCategoryInfo[]
}

export interface SubSubCategoryInfo {
  id: PUSubSubCategory
  name: string
  description: string
  supportsImages: boolean
}
