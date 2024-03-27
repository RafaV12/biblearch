import Link from 'next/link';

export default function Home() {
	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col items-center gap-32'>
			<section id='hero' className='flex flex-col items-center'>
				<div className='mb-12 text-center'>
					<p className='mb-6 text-sm text-primary'>lorem ipsum</p>
					<h2 className='w-80 text-5xl uppercase font-semibold text-tertiary tracking-widest'>
						The bible
					</h2>
					<h3 className='mb-6 text-2xl text-secondary'>King James Version</h3>
					<p className='text-sm text-primary'>
						Lorem ipsum dolor, sit amet consectetur
					</p>
				</div>

				<div className='flex items-center gap-x-4'>
					<Link
						href='/old-testament'
						className='px-6 py-2 bg-cta text-white rounded-full'
					>
						Old Testament
					</Link>
					<Link
						href='/new-testament'
						className='px-6 py-2 bg-cta text-white rounded-full'
					>
						New Testament
					</Link>
				</div>
			</section>

			<section className='flex flex-col items-center gap-10 lg:flex-row'>
				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary'>
						Example title
					</h3>
					<p className='text-balance text-primary'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
						debitis inventore nam eligendi aliquid, voluptate delectus
						praesentium dolorum molestiae quia facilis dignissimos, sapiente
						quibusdam? Neque quisquam minus odit tenetur exercitationem!
					</p>
				</div>

				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary'>
						Example title
					</h3>
					<p className='text-balance text-primary'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
						debitis inventore nam eligendi aliquid, voluptate delectus
						praesentium dolorum molestiae quia facilis dignissimos, sapiente
						quibusdam? Neque quisquam minus odit tenetur exercitationem!
					</p>
				</div>

				<div className='p-4 text-center'>
					<h3 className='mb-2 text-lg font-semibold text-secondary'>
						Example title
					</h3>
					<p className='text-balance text-primary'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
						debitis inventore nam eligendi aliquid, voluptate delectus
						praesentium dolorum molestiae quia facilis dignissimos, sapiente
						quibusdam? Neque quisquam minus odit tenetur exercitationem!
					</p>
				</div>
			</section>
		</main>
	);
}
