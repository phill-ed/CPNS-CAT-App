import { NextResponse } from 'next/server'
import { questions } from '@/data/questions'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const subSubCategory = searchParams.get('subSubCategory')
    const difficulty = searchParams.get('difficulty')
    const limit = parseInt(searchParams.get('limit') || '50')
    
    let filteredQuestions = questions
    
    if (category) {
      filteredQuestions = filteredQuestions.filter(q => q.category === category)
    }
    
    if (subSubCategory) {
      filteredQuestions = filteredQuestions.filter(q => q.subSubCategory === subSubCategory)
    }
    
    if (difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty)
    }

    // Shuffle questions for variety
    const shuffled = filteredQuestions.sort(() => Math.random() - 0.5)
    const limited = shuffled.slice(0, limit)

    return NextResponse.json({
      success: true,
      data: limited,
      total: limited.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    )
  }
}
