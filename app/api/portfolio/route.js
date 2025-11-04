import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Create an AbortController for timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

    const res = await fetch('https://noman99.pythonanywhere.com/api/portfolio/', {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      // Cache for 5 minutes (300 seconds)
      next: { revalidate: 300 }
    })

    clearTimeout(timeoutId)

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

    // Handle timeout specifically
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Failed to fetch portfolio', message: 'Request timeout - external API is not responding' },
        { status: 504 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to fetch portfolio', message: error.message },
      { status: 500 }
    )
  }
}
