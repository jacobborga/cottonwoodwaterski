import './styles/HeaderLayout.scss';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderLayoutT {
	children: ReactNode
}

const HeaderLayout = (props: HeaderLayoutT) => {
	return (
		<div className='header-layout'>
			<motion.div
				whileHover={{ scale: 1.2 }}
			><Link to='/'>Home</Link></motion.div>
			<motion.div
				whileHover={{ scale: 1.2 }}
			><Link to='/'>Waiver</Link></motion.div>
			{props.children}
			<motion.div
				whileHover={{ scale: 1.2 }}
			><Link to='/'>About</Link></motion.div>
			<motion.div
				whileHover={{ scale: 1.2 }}
			><Link to='/'>Members</Link></motion.div>
		</div>
	);
}

export default HeaderLayout;