import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import './styles/LogoutWidget.scss';

const LogoutWidget = () => {
	const { logout } = useContext(AuthContext);
	return (
		<div className='logout'>
			<Button variant='contained' onClick={logout}>Logout</Button>
		</div>
	);
}

export default LogoutWidget;