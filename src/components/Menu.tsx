export const Menu: React.FC = () => {
	return (
		<header className='flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200'>
			<nav className='relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center gap-x-1'>
					<a
						className='flex-none font-semibold text-lg text-gray-800 focus:outline-none focus:opacity-80 flex items-center uppercase'
						href='#'
						aria-label='Brand'
					>
						<img src='/logo.png' alt='logo' className='w-12 h-12' />
						Union Master Tour
					</a>
					<button
						type='button'
						className='hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
						id='hs-header-base-collapse'
						aria-expanded='false'
						aria-controls='hs-header-base'
						aria-label='Toggle navigation'
						data-hs-collapse='#hs-header-base'
					>
						<svg
							className='hs-collapse-open:hidden size-4'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<line x1='3' x2='21' y1='6' y2='6' />
							<line x1='3' x2='21' y1='12' y2='12' />
							<line x1='3' x2='21' y1='18' y2='18' />
						</svg>
						<svg
							className='hs-collapse-open:block shrink-0 hidden size-4'
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path d='M18 6 6 18' />
							<path d='m6 6 12 12' />
						</svg>
						<span className='sr-only'>Toggle navigation</span>
					</button>
				</div>
				<div
					id='hs-header-base'
					className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block '
					aria-labelledby='hs-header-base-collapse'
				>
					<div className='overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300'>
						<div className='py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1'>
							<div className='grow'>
								<div className='flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1'>
									<a
										className='p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100'
										href='#'
										aria-current='page'
									>
										<svg
											className='shrink-0 size-4 me-3 md:me-2 block md:hidden'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' />
											<path d='M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
										</svg>
										Accueil
									</a>
									<a
										className='p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100'
										href='#'
									>
										<svg
											className='shrink-0 size-4 me-3 md:me-2 block md:hidden'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
											<circle cx='12' cy='7' r='4' />
										</svg>
										Classements UMT
									</a>
									<a
										className='p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100'
										href='#'
									>
										<svg
											className='shrink-0 size-4 me-3 md:me-2 block md:hidden'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M12 12h.01' />
											<path d='M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2' />
											<path d='M22 13a18.15 18.15 0 0 1-20 0' />
											<rect width='20' height='14' x='2' y='6' rx='2' />
										</svg>
										Inscription aux tournois
									</a>
									<a
										className='p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100'
										href='#'
									>
										<svg
											className='shrink-0 size-4 me-3 md:me-2 block md:hidden'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2' />
											<path d='M18 14h-8' />
											<path d='M15 18h-5' />
											<path d='M10 6h8v4h-8V6Z' />
										</svg>
										Règlement UMT
									</a>
								</div>
							</div>
							<div className='my-2 md:my-0 md:mx-2'>
								<div className='w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 '></div>
							</div>
							<div className=' flex flex-wrap items-center gap-x-1.5'>
								<a
									className='py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100'
									href='#'
								>
									Se connecter
								</a>
								<a
									className='py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
									href='#'
								>
									S'inscrire
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}