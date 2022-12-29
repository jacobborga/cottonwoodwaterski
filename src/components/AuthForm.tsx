import './styles/AuthForm.scss';
import { Button, TextField } from "@mui/material";
import useForm from '../hooks/useForm';
import useError from '../hooks/useError';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AuthForm = () => {
	const { error, setError, isError } = useError();
	const { values, setEmail, setPassword } = useForm();
	const { login } = useContext(AuthContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		login(values.email, values.password).catch((err: any) => setError(err));
	}

	return (

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
	);
}

export default AuthForm;