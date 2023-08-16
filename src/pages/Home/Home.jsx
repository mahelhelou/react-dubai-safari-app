import { useState } from 'react'
import { toursList } from '../../data'
import { paginate } from '../../utils/pagination'

// Components
import HeroHeader from '../../components/Hero'
import NewsLetter from '../../components/NewsLetter'
import Pagination from '../../components/Pagination'
import Services from '../../components/Services'
import Filter from '../../components/Filter'
import TourList from '../../components/TourList'
import Banner from '../../components/Banner'

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [sortItem, setSortItem] = useState('recomended')

	// Sort Tour
	const sortedTourList = sortItem === 'low' ? toursList.sort((a, b) => a.priceFrom - b.priceFrom) : sortItem === 'high' ? toursList.sort((a, b) => b.priceFrom - a.priceFrom) : toursList.sort((a, b) => b.rating - a.rating)

	const { pages, orderedTourList } = paginate(toursList.length, sortedTourList, currentPage)
	return (
		<div>
			<HeroHeader />
			<Services />
			<Filter setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
			<TourList toursList={orderedTourList} />
			<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<Banner />
			<NewsLetter />
		</div>
	)
}

export default Home
