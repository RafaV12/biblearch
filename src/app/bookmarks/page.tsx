'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Bookmark } from '../types';

import { getFromLocalStorage } from '../utils';

export default function Page() {
	const [bookmarks, setBookmarks] = useState<Bookmark[] | null>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	let content;

	function removeBookmark(bookmark: Bookmark) {
		if (bookmarks) {
			const filteredBookmarks = bookmarks.filter(
				(b) => b.title !== bookmark.title
			);
			localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks));
			setBookmarks(filteredBookmarks);
		}
	}

	useEffect(() => {
		const savedBookmarks = getFromLocalStorage('bookmarks');
		if (savedBookmarks) {
			setBookmarks(savedBookmarks);
		}
		setIsLoading(false);
	}, []);

	if (!bookmarks || bookmarks.length === 0) {
		content = <p>No bookmarks found</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	if (bookmarks && bookmarks.length > 0) {
		content = bookmarks.map((bookmark) => (
			<div
				key={bookmark.title}
				className='px-6 py-2 w-full flex items-center justify-between gap-8 bg-white bg-opacity-50 rounded-md md:w-2/5 lg:w-[18rem] xl:w-[19rem]'
			>
				<Link
					key={bookmark.title}
					href={bookmark.url}
					className='flex items-center gap-2 hover:text-cta'
				>
					<p className='md:text-lg'>{bookmark.title}</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='blue'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-external-link'
					>
						<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
						<polyline points='15 3 21 3 21 9'></polyline>
						<line x1='10' y1='14' x2='21' y2='3'></line>
					</svg>
				</Link>

				<button
					className='px-4 py-2 text-sm flex flex-col items-center rounded-md text-white font-semibold bg-red-600 tracking-wide hover:bg-red-700'
					onClick={() => removeBookmark(bookmark)}
					title='remove bookmark'
				>
					Remove
				</button>
			</div>
		));
	}

	return (
		<main className='py-10 px-4 mx-auto min-h-screen max-w-screen-lg flex flex-col gap-8'>
			<button
				onClick={() => {
					if (bookmarks && bookmarks.length > 0) {
						localStorage.setItem('bookmarks', JSON.stringify([]));
						setBookmarks([]);
					}
				}}
				className='px-4 py-2 w-fit md:self-end bg-black rounded-md text-white text-sm font-semibold'
			>
				Clear bookmarks
			</button>
			<div className='flex flex-col gap-4 md:gap-x-8 md:flex-row md:flex-wrap'>
				{content}
			</div>
		</main>
	);
}
