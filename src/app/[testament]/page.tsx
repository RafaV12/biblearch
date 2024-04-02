import Link from 'next/link';
import { notFound } from 'next/navigation';

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
			'1-Samuel',
			'2-Samuel',
			'1-Kings',
			'2-Kings',
			'1-Chronicles',
			'2-Chronicles',
			'Ezra',
			'Nehemiah',
			'Esther',
		],
	},
	{
		title: 'Wisdom Literature',
		books: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song-of-Solomon'],
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

const newTestamentBooksByTitle: BookGroup[] = [
	{
		title: 'The Gospels',
		books: ['Matthew', 'Mark', 'Luke', 'John'],
	},
	{
		title: 'The Acts of the Apostles',
		books: ['Acts'],
	},
	{
		title: 'Pauline Epistles',
		books: [
			'Romans',
			'1-Corinthians',
			'2-Corinthians',
			'Galatians',
			'Ephesians',
			'Philippians',
			'Colossians',
			'1-Thessalonians',
			'2-Thessalonians',
			'1-Timothy',
			'2-Timothy',
			'Titus',
			'Philemon',
		],
	},
	{
		title: 'General Epistles',
		books: [
			'Hebrews',
			'James',
			'1-Peter',
			'2-Peter',
			'1-John',
			'2-John',
			'3-John',
			'Jude',
		],
	},
	{
		title: 'Apocalyptic Literature',
		books: ['Revelation'],
	},
];

export default function Page({ params }: { params: { testament: string } }) {
	let testamentBooks;
	if (params.testament === 'old-testament') {
		testamentBooks = oldTestamentBooksByTitle;
	} else if (params.testament === 'new-testament') {
		testamentBooks = newTestamentBooksByTitle;
	} else {
		testamentBooks = null;
	}

	if (!testamentBooks) return notFound();

	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center '>
			<h1 className='mb-12 text-5xl capitalize font-semibold text-tertiary tracking-widest'>
				{params.testament.replace('-', ' ')}
			</h1>
			<div className='flex flex-col gap-x-10 gap-y-8 md:flex-row md:flex-wrap'>
				{testamentBooks.map((book) => (
					<figure key={book.title}>
						<figcaption className='mb-2 text-secondary font-semibold text-xl'>
							{book.title}
						</figcaption>
						<ul className='flex flex-col gap-y-2'>
							{book.books.map((innerBook) => (
								<Link
									key={innerBook}
									href={`/${encodeURIComponent(
										params.testament
									)}/${encodeURIComponent(innerBook)}`}
								>
									<li className='w-fit text-primary text-lg hover:text-cta cursor-pointer hover:underline'>
										{innerBook.replaceAll('-', ' ')}
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
