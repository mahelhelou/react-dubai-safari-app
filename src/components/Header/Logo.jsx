import { Link } from 'react-router-dom'
import DubaiLogo from '../../images/logo.png'

const Logo = () => {
	return (
		<Link to='/' className='logo'>
			<img src={DubaiLogo} alt='dubai-icon' className='logo-img' />
			<div className='logo-text'>
				<b>DUBAI</b>
				<b>DESERT</b>
				<b>SAFARI</b>
			</div>
		</Link>
	)
}

export default Logo
