import { Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import './styles/LogoutWidget.scss';

const LogoutWidget = () => {
	const navigate = useNavigate();
	const { logout } = useContext(AuthContext);
	return (
		<div className='logout'>
			<Button variant='contained' onClick={e => logout().then(() => { navigate('/login') })}>Logout</Button>
		</div>
	);
}

export default LogoutWidget;