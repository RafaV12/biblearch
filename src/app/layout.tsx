import type { Metadata } from 'next';
import Link from 'next/link';
import { Alegreya } from 'next/font/google';
import './globals.css';

import BackgroundVideo from './components/VideoBackground';

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
				<header className='p-4 mx-auto max-w-screen-lg flex items-center'>
					<Link href='/'>
						<h1 className='flex items-center text-2xl text-tertiary font-bold tracking-widest gap-2'>
							<img
								src='media/logo.png'
								className='w-16 h-16 rounded-full'
								alt=''
							/>
							Bible Arch
						</h1>
					</Link>
					<nav className='hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
						<ul className='flex items-center gap-8 text-secondary font-semibold text-lg'>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<a href=''>Favorites</a>
							</li>
							<li>
								<a href=''>Bookmarked</a>
							</li>
						</ul>
					</nav>
				</header>
				{/* mobile menu */}
				<ul className='p-4 border-b-2 hidden'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Home</a>
					</li>
				</ul>

				{children}
			</body>
		</html>
	);
}
