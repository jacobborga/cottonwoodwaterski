import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useError from '../hooks/useError';
import useForm from '../hooks/useForm';
import { AuthContext } from '../providers/AuthProvider';
import './styles/Login.scss';

const Login = () => {
	const navigate = useNavigate();
	const { error, setError, isError } = useError();
	const { values, setEmail, setPassword } = useForm();
	const { login, user } = useContext(AuthContext);

	useEffect(() => {
		if (user) navigate('/discussions');
	}, [user, navigate])

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(values.email, values.password).catch((err: any) => setError(err));
	}

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
				<h2>Cottonwood Members Login</h2>
				<form onSubmit={e => handleSubmit(e)} id='inputContainer'>
					<TextField
						variant='filled'
						label='Email'
						value={values.email}
						onChange={e => setEmail(e.currentTarget.value)}
					/>
					<TextField
						error={isError()}
						helperText={error?.message}
						variant='filled'
						label='Password'
						type='password'
						value={values.password}
						onChange={e => setPassword(e.currentTarget.value)}
					/>
					<Button
						sx={{
							width: '10rem',
							alignSelf: 'center',
							marginTop: '2rem',
							backgroundColor: 'rgb(0, 0, 0)',
							":hover": { backgroundColor: 'rgb(55, 55, 55)' }
						}}
						type='submit'
						variant='contained'
					>
						Login
					</Button>
				</form>
			</motion.div>
		</motion.div>
	);
}

export default Login;