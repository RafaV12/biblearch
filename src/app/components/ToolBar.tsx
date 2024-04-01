'use client';

import { usePathname, useRouter } from 'next/navigation';

import BookmarkBtn from './buttons/BookmarkBtn';
import LeftArrowIcon from './icons/LeftArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';

interface ToolBarProps {
	amountOfChapters: number;
}

export default function ToolBar({ amountOfChapters }: ToolBarProps) {
	// get the chapter from the current URL
	const router = useRouter();
	const pathname = usePathname();
	const baseUrl = pathname.split('/').slice(0, -1).join('/');
	const currentChapter = pathname.split('/').pop();
	const bookmark = {
		// Genesis 1
		title: pathname.split('/').slice(2, 4).join('/').replace('/', ' '),
		// Genesis/1
		url: pathname,
	};

	return (
		<div className='fixed bottom-0 left-0 p-4 w-full bg-white'>
			<div className='relative mx-auto max-w-screen-lg flex items-center justify-between'>
				{/* prev chapter */}
				<button
					type='button'
					title='previous chapter'
					disabled={Number(currentChapter) === 1}
					className='p-2 border rounded-lg'
					onClick={() =>
						router.push(`${baseUrl + '/' + (Number(currentChapter) - 1)}`)
					}
				>
					<LeftArrowIcon />
				</button>

				<BookmarkBtn bookmark={bookmark} />

				{/* next chapter */}
				<button
					type='button'
					title='next chapter'
					disabled={Number(currentChapter) === amountOfChapters}
					className='p-2 border rounded-lg'
					onClick={() =>
						router.push(`${baseUrl + '/' + (Number(currentChapter) + 1)}`)
					}
				>
					<RightArrowIcon />
				</button>
			</div>
		</div>
	);
}
