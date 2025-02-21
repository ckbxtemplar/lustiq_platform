import { fetchArticlesCount } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page() {

	// const fetchArticleCount = async () => {
	// 	const res = await fetch('http://localhost:1337/api/articles');
	// 	const data = await res.json();
	// 	return data.meta.pagination.total;
	// };
	
	// useEffect(() => {
	// 	fetchArticleCount().then(count => {
	// 		console.log("Cikkek száma:", count);
	// 	});
	// }, []);	

	const count = await fetchArticlesCount();
	console.log("darabszam:"+count)

  return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
        		<h1>Dashboard</h1>
					</div>
				</div>					
			</section>
		</main>    
  );
}