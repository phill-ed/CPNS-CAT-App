import { NextResponse } from 'next/server'

// Sample tests data - replace with database query
const tests = [
  {
    id: '1',
    title: 'CPNAS TWK 2024',
    category: 'TWK',
    duration: 100,
    totalQuestions: 110,
    passingScore: 60,
    isActive: true
  },
  {
    id: '2',
    title: 'CPNAS TKP 2024',
    category: 'TKP',
    duration: 100,
    totalQuestions: 35,
    passingScore: 60,
    isActive: true
  },
  {
    id: '3',
    title: 'CPNAS PU 2024',
    category: 'PU',
    duration: 100,
    totalQuestions: 30,
    passingScore: 60,
    isActive: true
  }
]

export async function GET() {
  try {
    return NextResponse.json(tests)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tests' },
      { status: 500 }
    )
  }
}
