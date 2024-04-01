'use client';

import { usePathname, useRouter } from 'next/navigation';

import RightArrowIcon from '../icons/RightArrowIcon';
import LeftArrowIcon from '../icons/LeftArrowIcon';

type NextChapterBtnProps = {
	amountOfChapters: number;
	toChapter: 'next' | 'previous';
};

export default function ChangeChapterBtn({
	amountOfChapters,
	toChapter,
}: NextChapterBtnProps) {
	// get the chapter from the current URL
	const router = useRouter();
	const pathname = usePathname();
	const baseUrl = pathname.split('/').slice(0, -1).join('/');
	const currentChapter = pathname.split('/').pop();

	return (
		<button
			type='button'
			title={`${toChapter} chapter`}
			className={`fixed bottom-4  ${
				toChapter === 'next' ? 'right-2' : 'left-2'
			}  p-2 h-fit w-fit bg-white shadow rounded-lg md:sticky md:bottom-0 md:top-1/2 ${
				toChapter === 'next' ? 'md:right-4' : 'md:left-4'
			} md:transform md:-translate-y-1/2`}
			onClick={() => {
				if (toChapter === 'next') {
					// change chapter to next one
					if (Number(currentChapter) < amountOfChapters) {
						router.push(`${baseUrl + '/' + (Number(currentChapter) + 1)}`);
					}
				} else {
					// change chapter to previous one
					if (Number(currentChapter) > 1) {
						router.push(`${baseUrl + '/' + (Number(currentChapter) - 1)}`);
					}
				}
			}}
		>
			{toChapter === 'next' ? <RightArrowIcon /> : <LeftArrowIcon />}
		</button>
	);
}
