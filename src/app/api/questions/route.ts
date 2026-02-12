import { NextResponse } from 'next/server'

// Sample questions data
const questions = [
  {
    id: '1',
    text: 'Siapa presiden pertama Indonesia?',
    category: 'TWK',
    difficulty: 'EASY',
    points: 1,
    testId: '1',
    answers: [
      { id: 'a', text: 'Sukarno', isCorrect: true },
      { id: 'b', text: 'Suharto', isCorrect: false },
      { id: 'c', text: 'Megawati', isCorrect: false },
      { id: 'd', text: 'Joko Widodo', isCorrect: false }
    ]
  },
  {
    id: '2',
    text: 'Apa ibu kota Indonesia yang baru?',
    category: 'TWK',
    difficulty: 'EASY',
    points: 1,
    testId: '1',
    answers: [
      { id: 'a', text: 'Jakarta', isCorrect: false },
      { id: 'b', text: 'Nusantara', isCorrect: true },
      { id: 'c', text: 'Bandung', isCorrect: false },
      { id: 'd', text: 'Surabaya', isCorrect: false }
    ]
  }
]

export async function GET() {
  try {
    return NextResponse.json(questions)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    )
  }
}
