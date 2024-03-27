export default function VideoBackground() {
	return (
		<>
			<video className='hidden lg:block' autoPlay muted loop id='myVideo'>
				<source
					media='(min-width: 2000px)'
					src='large.webm'
					type='video/webm'
				/>
				<source
					media='(min-width: 1000px)'
					src='media/clouds.mp4'
					type='video/mp4'
				/>
				<source src='media/clouds-mobile.mp4' type='video/mp4' />
			</video>
			<div className='fixed top-0 left-0 -z-40 bg-white bg-opacity-80 h-screen w-full'></div>
		</>
	);
}
