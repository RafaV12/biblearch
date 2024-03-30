'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Bookmark } from '../types';

export default function Page() {
	const savedBookmarks = localStorage.getItem('bookmarks');
	const initialState = savedBookmarks ? JSON.parse(savedBookmarks) : [];

	const [bookmarks, setBookmarks] = useState<Bookmark[]>(initialState);

	function removeBookmark(bookmark: Bookmark) {
		// remove from state
		const filteredBookmarks = bookmarks.filter(
			(item) => item.title !== bookmark.title
		);

		setBookmarks(filteredBookmarks);
	}

	useEffect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}, [bookmarks]);

	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center'>
			<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
				Bookmarks
			</h1>

			{bookmarks.length > 0
				? bookmarks.map((bookmark) => (
						<div key={bookmark.title} className='flex items-center gap-12'>
							<Link href={bookmark.url}>{bookmark.title}</Link>

							<button onClick={() => removeBookmark(bookmark)}>Remove</button>
						</div>
				  ))
				: 'No bookmarks available'}
		</main>
	);
}
