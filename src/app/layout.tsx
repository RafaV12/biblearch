import type { Metadata } from 'next';
import Link from 'next/link';
import { Alegreya } from 'next/font/google';
import './globals.css';

import BackgroundVideo from './components/VideoBackground';
import Bookmarks from './components/icons/BookmarksIcon';
import SearchIcon from './components/icons/SearchIcon';

const alegreya = Alegreya({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bible Arch',
	description: 'Explore inspiring scriptures and deepen your faith.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={alegreya.className}>
				<BackgroundVideo />
				<header className='p-4 mx-auto max-w-screen-lg flex items-center justify-between'>
					<Link href='/'>
						<h1 className='flex items-center text-2xl text-tertiary font-bold tracking-widest gap-2'>
							<img
								src='/media/logo.png'
								className='w-16 h-16 rounded-full'
								alt=''
							/>
							Bible Arch
						</h1>
					</Link>
					<nav className=''>
						<ul className='flex items-center gap-4 text-secondary font-semibold text-lg'>
							<li>
								<Link href={'/'}>
									<SearchIcon />
								</Link>
							</li>
							<li>
								<Link href={'/bookmarks'}>
									<Bookmarks />
								</Link>
							</li>
						</ul>
					</nav>
				</header>

				{children}
			</body>
		</html>
	);
}
