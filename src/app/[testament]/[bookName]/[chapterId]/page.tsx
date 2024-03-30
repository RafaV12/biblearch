import { Book } from '@/app/types';

import ToolBar from '@/app/components/ToolBar';

export default function Page({
	params,
}: {
	params: { bookName: string; chapterId: string };
}) {
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
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center '>
			<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
				{params.bookName.replace('-', ' ')}
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
			<ToolBar amountOfChapters={chapter.verses.length} />
		</main>
	) : (
		<>No chapter found</>
	);
}
