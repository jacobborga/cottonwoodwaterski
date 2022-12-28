// import Schedule from '../components/Schedule';
import { motion } from 'framer-motion';
import './styles/FrontPage.scss';
import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
	const navigate = useNavigate();
	return (
		<motion.div
			initial={{ opacity: 0.9 }}
			whileInView={{ opacity: 1 }}
			className='front-page'
		>
			<motion.h2
				initial={{ x: 500 }}
				whileInView={{ x: 0 }}
				whileHover={{ scale: 1.05 }}
				className='keep-updated-text'
				onClick={e => navigate('/blog')}
			>Keep Updated</motion.h2>
		</motion.div>
	);
}

export default FrontPage;