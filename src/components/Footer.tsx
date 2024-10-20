export const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-50'>
			<div className='container px-6 py-12 mx-auto'>
				<div className='md:flex md:-mx-3 md:items-center md:justify-between'>
					<h1 className='text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl'>
						Inscrivez-vous pour accéder aux classements et au calendrier
					</h1>
					<div className='mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto'>
						<a
							href='#'
							className='inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'
						>
							<span>S'inscrire</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-5 h-5'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
								/>
							</svg>
						</a>
					</div>
				</div>
				<hr className='my-6 border-gray-200 md:my-10' />
				<div className='flex flex-col items-center justify-between sm:flex-row'>
					<a href='#'>
						<img className='w-auto h-[80px]' src='icon.png' alt='' />
					</a>
					<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
						© Copyright 2024. All Rights Reserved.
					</p>
					<p className='mt-4 text-sm text-gray-500 sm:mt-0'>maximetcl@gmail.com</p>
				</div>
			</div>
		</footer>
	)
}
