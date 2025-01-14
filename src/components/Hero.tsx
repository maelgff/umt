export const Hero: React.FC = () => {
	return (
		<div className='w-full bg-[center_top_-220px] bg-cover h-[38rem] bg-[url("/tennis.jpg")]'>
			<div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
				<div className='text-center'>
					<h1 className='text-3xl font-semibold text-white lg:text-4xl'>
						Union Master Tour
					</h1>
					<button className='w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
						S'inscrire
					</button>
				</div>
			</div>
		</div>
	)
}
