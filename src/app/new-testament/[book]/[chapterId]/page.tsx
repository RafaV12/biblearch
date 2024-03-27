'use client';

import { usePathname } from 'next/navigation';

import books from '../../../../../public/new-testament/books';

import { Chapter, Book, BookShortVersion } from '@/app/types';

export default function Page({ params }: { params: { chapterId: string } }) {
	// get the book name from the current URL
	const pathname = usePathname();
	const bookName = pathname.split('/')[2];

	// check if book exist
	const bookExists = books.some(
		(book: BookShortVersion) => book.name === bookName
	);
	if (!bookExists) return <>Book not found</>;

	// fetch book for chapters
	const book: Book = require('../../../../../public/new-testament/' + bookName);

	const chapter = book.chapters.find(
		(chapter) => chapter.id === params.chapterId
	);

	return chapter ? (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center '>
			<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
				{bookName.replace('-', ' ')}
			</h1>

			<h2 className='mb-8 text-2xl uppercase font-semibold self-start text-secondary tracking-widest'>
				{`Chapter ${chapter.id}`}
			</h2>

			<div className='flex flex-col gap-x-10 gap-y-8 md:flex-row md:flex-wrap'>
				<ul className='flex flex-col gap-y-4'>
					{chapter.verses.map((id) => (
						<li key={id.id} className='flex gap-x-2 text-white'>
							<span className='-mt-0.5 text-primary'>{id.id}</span>
							<p className='text-lg text-primary'>{id.text}</p>
						</li>
					))}
				</ul>
			</div>
		</main>
	) : (
		<>Chapter Not fund</>
	);
}
