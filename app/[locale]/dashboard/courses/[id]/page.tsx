import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import CoursePrivate from '@/app/ui/courses/course-private';
import { notFound, redirect } from "next/navigation";
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Course',
};

interface CustomUser {
  name?: string;
  email?: string;
  subscriber?: string | number;
  // egyéb mezők
}

interface CustomSession {
  user?: CustomUser;
}


export default async function DashboardCouresView(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const slug = params.id;	
	
	const session = await auth() as CustomSession;	
	const subscribed = session?.user?.subscriber;
	console.log("feliratkozva:"+subscribed);

  if (!subscribed || subscribed !== 5) {
    redirect('/dashboard/courses?msg=subscription-required');
  }

	const course = await fetchCourse(slug);

	if (!course || !course?.data || !course?.data?.courses || course.data.courses.length !== 1) {
		notFound();
	}	

	const data = course.data.courses[0];

  return (
		<CoursePrivate data={data} />
	)
}