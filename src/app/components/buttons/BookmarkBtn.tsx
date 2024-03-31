'use client';

import { useState, useEffect } from 'react';

import { getFromLocalStorage } from '@/app/utils';

import { Bookmark } from '@/app/types';

import BookmarkedIcon from '../icons/BookmarkedIcon';
import AddBookmarkIcon from '../icons/AddBookmarkIcon';

export default function BookmarkBtn({ bookmark }: { bookmark: Bookmark }) {
	const [isChapterBookmarked, setIsChapterBookmarked] =
		useState<boolean>(false);

	// toggles bookmark
	function bookmarkChapter() {
		const savedBookmarks: Bookmark[] = getFromLocalStorage('bookmarks');
		if (savedBookmarks) {
			if (savedBookmarks.length > 0) {
				const isChapterBookmarked = savedBookmarks.find(
					(savedBookmark) => savedBookmark.title === bookmark.title
				);
				if (isChapterBookmarked) {
					// remove bookmark from existing local storage array
					const filteredBookmarks = savedBookmarks.filter(
						(savedBookmark) => savedBookmark.title !== bookmark.title
					);
					setIsChapterBookmarked(false);
					return localStorage.setItem(
						'bookmarks',
						JSON.stringify(filteredBookmarks)
					);
				} else {
					// bookmark chapter to existing local storage array
					setIsChapterBookmarked(true);
					return localStorage.setItem(
						'bookmarks',
						JSON.stringify([...savedBookmarks, bookmark])
					);
				}
			}
		}
		// add bookmark to local storage
		setIsChapterBookmarked(true);
		localStorage.setItem('bookmarks', JSON.stringify([bookmark]));
	}

	useEffect(() => {
		// check if chapter is bookmarked
		const savedBookmarks: Bookmark[] = getFromLocalStorage('bookmarks');
		if (savedBookmarks) {
			const isChapterBookmarked = savedBookmarks.find(
				(savedBookmark) => savedBookmark.title === bookmark.title
			);
			if (isChapterBookmarked) {
				setIsChapterBookmarked(true);
			}
		}
	}, []);

	return (
		<button
			onClick={bookmarkChapter}
			title={isChapterBookmarked ? 'Unbookmark Chapter' : 'Bookmark Chapter'}
			className='p-2 border rounded-full hover:bg-slate-100'
		>
			{isChapterBookmarked ? <BookmarkedIcon /> : <AddBookmarkIcon />}
		</button>
	);
}
