import { NextResponse } from 'next/server';
import { fetchCoursesTitles } from '@/app/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get('search') || '';

  try {
    const titles = await fetchCoursesTitles(searchQuery);
		console.log('titles');
    return NextResponse.json(titles);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json({ error: 'Failed to fetch tags' }, { status: 500 });
  }
}