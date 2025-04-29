import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import CoursePrivate from '@/app/ui/courses/course-private';
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Course',
};

export default async function DashboardCouresView(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const slug = params.id;	

	const course = await fetchCourse(slug);

	if (!course || !course?.data || !course?.data?.courses || course.data.courses.length !== 1) {
		notFound();
	}	

	const data = course.data.courses[0];

  return (
		<CoursePrivate data={data} />
	)
}