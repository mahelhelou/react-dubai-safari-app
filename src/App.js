import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import SingleTour from './pages/SingleTour'
import About from './pages/About'
import Login from './pages/Forms/Login'
import Register from './pages/Forms/Register'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tour/:id' element={<SingleTour />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
