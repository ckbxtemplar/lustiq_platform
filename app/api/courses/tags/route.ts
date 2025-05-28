import { NextResponse } from 'next/server';
import { fetchCoursesTags } from '@/app/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get('search') || '';

  try {
    const tags = await fetchCoursesTags(searchQuery);
    return NextResponse.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
  }
}