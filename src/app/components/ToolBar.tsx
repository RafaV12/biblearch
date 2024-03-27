'use client';

import { usePathname, useRouter } from 'next/navigation';

import LeftArrowIcon from './icons/LeftArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';
import FontSizeIcon from './icons/FontSizeIcon';

interface ToolBarProps {
	amountOfChapters: number;
}

export default function ToolBar({ amountOfChapters }: ToolBarProps) {
	const router = useRouter();
	// get the chapter from the current URL
	const pathname = usePathname();
	const baseUrl = pathname.split('/').slice(0, -1).join('/');
	const currentChapter = pathname.split('/').pop();

	return (
		<div className='fixed bottom-0 left-0 p-4 w-full bg-white'>
			<div className='mx-auto  max-w-screen-lg flex items-center justify-between'>
				<button
					type='button'
					disabled={Number(currentChapter) === 1}
					className='p-2 border rounded-lg'
					onClick={() =>
						router.push(`${baseUrl + '/' + (Number(currentChapter) - 1)}`)
					}
				>
					<LeftArrowIcon />
				</button>

				<button
					type='button'
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
