import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward the request to the Laravel backend API
    const laravelApiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL || 'http://localhost:8000';
    
    const response = await fetch(`${laravelApiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        result,
        { status: response.status }
      );
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
