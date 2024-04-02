import Link from 'next/link';

function NotFoundPage() {
	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-xl flex flex-col items-center'>
			<div className=' p-8 max-w-md mx-auto text-center bg-white bg-opacity-90 rounded-lg shadow-lg'>
				<div className='mb-4 text-9xl font-bold text-cta '>404</div>
				<h1 className='mb-6 text-4xl font-bold text-gray-800 '>
					Oops! Page Not Found
				</h1>
				<p className='mb-8 text-lg text-gray-600 '>
					The page you're looking for seems to have gone on a little adventure.
					Don't worry, we'll help you find your way back home.
				</p>
				<Link
					href={'/'}
					className='px-6 py-3 inline-block bg-cta text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300'
				>
					Go Back Home
				</Link>
			</div>
		</main>
	);
}

export default NotFoundPage;
