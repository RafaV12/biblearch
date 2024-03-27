import Link from 'next/link';

import { BookGroup } from '../types';

const oldTestamentBooksByTitle: BookGroup[] = [
	{
		title: 'Books of Law',
		books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
	},
	{
		title: 'Historical Books',
		books: [
			'Joshua',
			'Judges',
			'Ruth',
			'1 Samuel',
			'2 Samuel',
			'1 Kings',
			'2 Kings',
			'1 Chronicles',
			'2 Chronicles',
			'Ezra',
			'Nehemiah',
			'Esther',
		],
	},
	{
		title: 'Wisdom Literature',
		books: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
	},
	{
		title: 'Major Prophets',
		books: ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel'],
	},
	{
		title: 'Minor Prophets',
		books: [
			'Hosea',
			'Joel',
			'Amos',
			'Obadiah',
			'Jonah',
			'Micah',
			'Nahum',
			'Habakkuk',
			'Zephaniah',
			'Haggai',
			'Zechariah',
			'Malachi',
		],
	},
];

export default function Page() {
	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center '>
			<h1 className='mb-12 text-5xl uppercase font-semibold text-tertiary tracking-widest'>
				Old Testament
			</h1>
			<div className='flex flex-col gap-x-10 gap-y-8 md:flex-row md:flex-wrap'>
				{oldTestamentBooksByTitle.map((book) => (
					<figure key={book.title}>
						<figcaption className='mb-2 text-secondary font-semibold text-xl'>
							{book.title}
						</figcaption>
						<ul className='flex flex-col gap-y-2'>
							{book.books.map((innerBook) => (
								<Link key={innerBook} href={`/old-testament/${innerBook}`}>
									<li className='w-fit text-primary text-lg hover:text-cta cursor-pointer hover:underline'>
										{innerBook}
									</li>
								</Link>
							))}
						</ul>
					</figure>
				))}
			</div>
		</main>
	);
}
