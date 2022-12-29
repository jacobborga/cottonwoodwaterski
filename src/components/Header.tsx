import './styles/Header.scss';

import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import HeaderLayout from './HeaderLayout';

const Header = () => {
	const navigate = useNavigate();
	const navigateHome = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
		e.preventDefault();
		navigate('/')
	}
	return (
		<div className='header'>
			<HeaderLayout>
				<motion.img
					src={require('./assets/ski-logo.png')}
					style={{ width: '350px', minHeight: '75px', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}
					alt='Cottonwood Waterski Lake'
					onClick={e => navigateHome(e)}
					initial={{ y: -75 }}
					whileInView={{ y: 0 }}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.5, type: 'spring', bounce: 0.35 }}
					whileTap={{ scale: 0.95 }}
				/>
			</HeaderLayout>
		</div>
	);
}

export default Header;