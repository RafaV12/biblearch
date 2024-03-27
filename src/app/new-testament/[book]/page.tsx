import Link from 'next/link';

import books from '../../../../public/new-testament/books';

import { Book, Chapter } from '@/app/types';

export default function Page({ params }: { params: { book: string } }) {
	const bookExists = books.find((book) => book.name === params.book);
	if (!bookExists) return <>Book not found</>;

	const book = require('../../../../public/new-testament/' + params.book);

	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center'>
			<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
				{params.book}
			</h1>

			<h2 className='mb-6 self-start text-2xl text-secondary'>Chapters</h2>
			<div className='flex flex-wrap gap-x-10 gap-y-8'>
				{book.chapters.map((chapter: Chapter) => (
					<Link
						key={chapter.id}
						className='w-fit text-center'
						href={`/new-testament/${encodeURIComponent(
							params.book
						)}/${encodeURIComponent(chapter.id)}`}
					>
						<p className='pb-1 text-secondary text-xl font-semibold border-b border-primary md:text-2xl'>
							{chapter.id}
						</p>
						<p className='text-lg text-primary'>
							{chapter.verses.length} verses
						</p>
					</Link>
				))}
			</div>
		</main>
	);
}
