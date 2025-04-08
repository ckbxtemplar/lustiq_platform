import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import CoursesClient from '@/app/ui/courses/courses-client';

export const metadata: Metadata = {
  title: 'Courses',
};

export default function Courses() {
  return <CoursesClient />;
}