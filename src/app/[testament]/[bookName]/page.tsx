import Link from 'next/link';

import { Book, BookShortVersion, Chapter } from '@/app/types';

export default function Page({
	params,
}: {
	params: { testament: string; bookName: string };
}) {
	let data: BookShortVersion | null;
	try {
		data = require('../../../../public/bible/summarized-books/' +
			params.bookName);
	} catch (e: any) {
		if (e.code !== 'MODULE_NOT_FOUND') {
			throw e;
		}
		data = null;
	}

	if (!data) return <>Data not found</>;

	return (
		<>
			<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center'>
				<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
					{params.bookName.replace('-', ' ')}
				</h1>

				<h2 className='mb-8 text-2xl uppercase font-semibold self-start text-secondary tracking-widest'>
					Chapters
				</h2>
				<div className='flex flex-wrap gap-x-10 gap-y-8'>
					{data.versesPerChapter.map((chapter) => (
						<Link
							key={chapter.id}
							className='w-fit text-center'
							href={`/${params.testament}/${encodeURIComponent(
								params.bookName
							)}/${encodeURIComponent(chapter.id)}`}
						>
							<p className='pb-1 text-secondary text-xl font-semibold border-b border-primary md:text-2xl'>
								{chapter.id}
							</p>
							<p className='text-lg text-primary'>
								{chapter.amountOfVerses} verses
							</p>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
