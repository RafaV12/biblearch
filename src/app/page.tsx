import Link from 'next/link';

export default function Home() {
	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-xl flex flex-col items-center'>
			<section id='hero' className='mb-24 flex flex-col items-center'>
				<div className='mb-12 flex flex-col items-center text-center'>
					<div className='mb-6 w-fit flex items-center gap-x-2'>
						<p className='text-sm text-primary'>Made with</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='16'
							viewBox='0 -960 960 960'
							width='16'
							fill='red'
						>
							<path d='m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z' />
						</svg>
					</div>
					<h2 className='w-80 text-5xl uppercase font-semibold text-tertiary tracking-widest'>
						The bible
					</h2>
					<h3 className='mb-6 text-2xl text-secondary'>King James Version</h3>
					<q className='text-sm text-primary text-pretty lg:text-lg'>
						For God so loved the world, that he gave his only begotten Son, that
						whosoever believeth in him should not perish, but have everlasting
						life.
					</q>
					<Link href={'/new-testament/John/3'}>- John 3:16 -</Link>
				</div>

				<div className='flex items-center gap-x-4'>
					<Link
						href='/old-testament'
						className='px-6 py-2 bg-cta text-white font-semibold rounded-full tracking-wider'
					>
						Old Testament
					</Link>
					<Link
						href='/new-testament'
						className='px-6 py-2 bg-cta text-white font-semibold rounded-full tracking-wider'
					>
						New Testament
					</Link>
				</div>
			</section>

			<section className='flex flex-col gap-6'>
				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary lg:text-xl'>
						Why should I read the bible?
					</h3>
					<p className='text-balance text-primary lg:text-lg'>
						Reading it provides spiritual guidance, wisdom, and insight into
						life’s purpose and meaning. Within its pages, you’ll find teachings
						on love, forgiveness, compassion, and justice.
					</p>
				</div>

				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary lg:text-xl'>
						Old Testament vs. New Testament
					</h3>
					<p className='text-balance text-primary text-pretty lg:text-lg'>
						The Old Testament is foundational; the New Testament builds on that
						foundation with further revelation from God. The Old Testament
						establishes principles that are seen to be illustrative of New
						Testament truths.
					</p>
				</div>

				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary lg:text-xl'>
						Where do I start?
					</h3>

					<p className='text-balance text-primary text-pretty lg:text-lg'>
						At{' '}
						<Link className='underline' href={'/old-testament/Genesis/1'}>
							Genesis
						</Link>
						. Like everything else did. :)
					</p>
				</div>
			</section>
		</main>
	);
}
