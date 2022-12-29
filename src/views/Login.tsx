import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { AuthContext } from '../providers/AuthProvider';
import './styles/Login.scss';

const Login = () => {
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (user) navigate('/discussions');
	}, [user, navigate])


	return (
		<motion.div
			initial={{ backgroundColor: '#053928' }}
			whileInView={{ backgroundColor: 'rgb(225, 225, 225)' }}
			className='login'
		>
			<motion.div id='backdrop'
				initial={{ x: 350 }}
				whileInView={{ x: 0 }}
			>
				<h2>Cottonwood Waterski Club Login</h2>
				<AuthForm />
			</motion.div>
		</motion.div>
	);
}

export default Login;