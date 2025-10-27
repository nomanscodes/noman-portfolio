import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://noman99.pythonanywhere.com/api/portfolio/', {
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache for 5 minutes (300 seconds)
      next: { revalidate: 300 }
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    return NextResponse.json(
      { error: 'Failed to fetch portfolio', message: error.message },
      { status: 500 }
    )
  }
}
