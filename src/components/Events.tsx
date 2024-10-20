export const Events: React.FC = () => {
	return (
		<div className='relative overflow-hidden bg-gray-100'>
			<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10'>
				<div className='max-w-2xl text-center mx-auto'>
					<h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl'>
						Nos évènements
					</h1>
				</div>
				<div className='mt-10 relative max-w-5xl mx-auto'>
					<div className='inset-0 size-full'>
						<div className='flex flex-col justify-center items-center size-full'>
							<video src='umt.mp4' autoPlay controls />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
