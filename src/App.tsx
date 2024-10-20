import { Clients } from './components/Clients'
import { Contacts } from './components/Contacts'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Ranking } from './components/Ranking'

const App = () => {
	return (
		<>
			<Menu />
			<Hero />
			<Ranking />
			<Clients />
			<Events />
			<Contacts />
			<Footer />
		</>
	)
}

export default App
