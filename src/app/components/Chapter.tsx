export default function Chapter({ book, id, data }) {
	return (
		<main className='py-10 px-4 min-h-screen mx-auto max-w-screen-lg flex flex-col md:items-center '>
			<h1 className='mb-12 text-3xl uppercase font-semibold text-tertiary tracking-widest md:text-5xl'>
				{book}
			</h1>

			<h2 className='mb-12 text-2xl uppercase font-semibold self-start text-secondary tracking-widest'>
				{`Chapter ${id}`}
			</h2>

			<div className='flex flex-col gap-x-10 gap-y-8 md:flex-row md:flex-wrap'>
				<ul className='flex flex-col gap-y-4'>
					{data.verses.map((id) => (
						<li key={id.id} className='flex gap-x-2 text-white'>
							<span className='-mt-0.5 text-primary'>{id.id}</span>
							<p className='text-lg text-primary'>{id.text}</p>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
