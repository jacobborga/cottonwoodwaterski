import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import './styles/Discussions.scss';

const Discussions = () => {
	const { user } = useContext(AuthContext);
	if (user) {
		return (
			<div className='discussions'>
				<h2>Discussions</h2>
				<h4>Welcome, {user.email}</h4>
			</div>
		);
	} else {
		return <>Loading...</>
	}
}

export default Discussions;