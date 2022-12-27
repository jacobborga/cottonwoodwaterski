import './styles/Header.scss';

import { useNavigate, Link } from 'react-router-dom';
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
				<motion.div id='title'
					whileHover={{ scale: 0.95, scaleX: 1.001 }}
					onClick={e => navigateHome(e)}
				>
					<motion.h2
						initial={{ x: '550%' }}
						animate={{ x: '0' }}
						transition={{ duration: 1 }}
					>Cottonwood</motion.h2>
					<motion.h2
						initial={{ x: '-550%' }}
						animate={{ x: '0' }}
						transition={{ duration: 1 }}
					>Waterski Lake</motion.h2>
				</motion.div>
			</HeaderLayout>
		</div>
	);
}

export default Header;