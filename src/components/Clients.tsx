export const Clients = () => {
	return (
		<div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
			<div className='sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6'>
				<h2 className='text-xl font-semibold md:text-2xl md:leading-tight text-gray-800'>
					Nos partenaires
				</h2>
			</div>
			<div className='my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20'>
				<a className='shrink-0 transition hover:-translate-y-1' href='#'>
					<img src='stade.png' alt='stade' className='h-[100px]' />
				</a>
				<a className='shrink-0 transition hover:-translate-y-1' href='#'>
					<img src='head.png' alt='head' className='h-[100px]' />
				</a>
				<a className='shrink-0 transition hover:-translate-y-1' href='#'>
					<img src='coq.png' alt='coq' className='h-[100px]' />
				</a>
			</div>
		</div>
	)
}
