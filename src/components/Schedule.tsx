import useCalender from '../hooks/useCalender';
import './styles/Schedule.scss';

const Schedule = () => {
	const [cells] = useCalender();
	return (
		<div className='schedule'>
			<h2>Schedule</h2>

		</div>
	);
}

export default Schedule;