import './styles/CalenderCell.scss';

const CalenderCell = (props: any) => {
	return (
		<div className='calender-cell'>{props.day}</div>
	);
}

export default CalenderCell;