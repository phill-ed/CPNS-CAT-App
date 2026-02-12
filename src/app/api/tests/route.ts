import { NextResponse } from 'next/server'
import { tests } from '@/data/tests'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const subCategory = searchParams.get('subCategory')
    
    let filteredTests = tests
    
    if (category) {
      filteredTests = filteredTests.filter(t => t.category === category)
    }
    
    if (subCategory) {
      filteredTests = filteredTests.filter(t => t.subSubCategory === subCategory)
    }

    return NextResponse.json({
      success: true,
      data: filteredTests,
      total: filteredTests.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tests' },
      { status: 500 }
    )
  }
}
