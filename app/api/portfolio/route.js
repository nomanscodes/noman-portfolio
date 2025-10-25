import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://noman99.pythonanywhere.com/api/portfolio/', {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    })
    
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 })
  }
}
