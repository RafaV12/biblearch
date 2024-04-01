import Link from 'next/link';

import { Book } from '@/app/types';

import ChangeChapterBtn from '@/app/components/buttons/ChangeChapterBtn';
import LeftArrowIcon from '@/app/components/icons/LeftArrowIcon';
import BookmarkBtn from '@/app/components/buttons/BookmarkBtn';

export default function Page({
	params,
}: {
	params: { testament: string; bookName: string; chapterId: string };
}) {
	const bookmark = {
		// e.g: Genesis 1
		title: `${params.bookName} ${params.chapterId}`,
		url: `/${params.testament}/${params.bookName}/${params.chapterId}`,
	};

	let book: Book | null;
	try {
		book = require('../../../../../public/bible/' + params.bookName);
	} catch (e: any) {
		if (e.code !== 'MODULE_NOT_FOUND') {
			throw e;
		}
		book = null;
	}

	if (!book) return <>Data not found</>;

	const chapter = book.chapters.find(
		(chapter) => chapter.id === params.chapterId
	);

	return chapter ? (
		<div className='mx-auto relative flex xl:max-w-screen-xl'>
			<ChangeChapterBtn
				toChapter={'previous'}
				amountOfChapters={book.chapters.length}
			/>

			<main className='pt-10 pb-16 px-4 min-h-screen mx-auto flex flex-col md:items-center md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg'>
				<Link
					href={`/${params.testament}/${params.bookName}`}
					className='mb-12 flex items-center gap-x-3 text-3xl uppercase font-semibold text-tertiary cursor-pointer tracking-widest md:text-5xl'
				>
					<LeftArrowIcon />
					<h1>{params.bookName.replace('-', ' ')}</h1>
				</Link>

				<div className='mb-8 flex items-center gap-3 self-start'>
					<h2 className='text-2xl uppercase font-semibold text-secondary tracking-widest'>
						{`Chapter ${chapter.id}`}
					</h2>
					<BookmarkBtn bookmark={bookmark} />
				</div>

				<div className='py-6 px-4 flex flex-col gap-x-10 gap-y-8 bg-white rounded-xl shadow-xl md:flex-row md:flex-wrap'>
					<ul className='flex flex-col gap-y-4'>
						{chapter.verses.map((id) => (
							<li key={id.id} className='flex gap-x-2 text-white'>
								<span className='-mt-0.5 text-primary'>{id.id}</span>
								<p className='text-lg text-primary text-pretty xl:text-xl'>
									{id.text}
								</p>
							</li>
						))}
					</ul>
				</div>
			</main>

			<ChangeChapterBtn
				toChapter={'next'}
				amountOfChapters={book.chapters.length}
			/>
		</div>
	) : (
		<>No chapter found</>
	);
}
