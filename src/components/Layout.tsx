import './styles/Layout.scss';

import { Outlet } from 'react-router-dom';
import Header from './Header';
import LogoutWidget from './LogoutWidget';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Layout = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className='layout'>
			<Header />
			{user ? <LogoutWidget /> : <></>}
			<Outlet />
		</div>
	);
}

export default Layout;