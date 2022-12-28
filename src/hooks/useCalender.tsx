import { useState } from "react";
import CalenderCell from '../components/CalenderCell';

function useDate() {
	const [date, setDate] = useState<Date>(new Date());

	const getDateDetails = () => {
		const month = date.getMonth();
		const day = date.getDay();
		const year = date.getFullYear();
		return { month, day, year };
	}

	return { date, setDate, getDateDetails };
}

const totalDaysInMonth = (month: number) => {
	// 0 - January, 1 - February, 2 - March, 3 - April, 4 - May, 5 - June, 6 - July, 7 - August, 8 - September, 9 - October, 10 - November, 11 - December
	switch (month) {
		case 0 || 2 || 4 || 6 || 7 || 9 || 11:
			return 31;
		case 1:
			return 28;
		case 3 || 5 || 8 || 10:
			return 30;
		default:
			return 31;
	}
}

const buildCalender = (month: number, currentDay: number, year: number) => {
	const cells = [];
	const td = totalDaysInMonth(month);
	for (let i = 0; i < td + 1; i++) {
		cells.push(<CalenderCell day={currentDay} />)
	}

	return cells;
}

export default function useCalender() {
	const [cells, setCells] = useState<any>();
	const { getDateDetails } = useDate();
	const { month, day, year } = getDateDetails();
	const calenderCells = buildCalender(month, day, year);
	return [calenderCells]
}