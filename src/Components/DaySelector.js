import React, {useContext, useState, useEffect, useMemo, useCallback} from "react";
import styled from 'styled-components';
import Context from "../Context";

const DaySelectorStyle = styled.div`
	display: flex;
	padding: 1em 0 0.4em 0;
	align-items: center;
	justify-content: center;
`

const DayContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 40px;
	width: 48px;
	padding: 16px 8px;
	border-radius: 30px;
	border: ${props => props.selected ? '1px solid gray' : 'none'};
	height: 100px;
	align-items: center;
	justify-content: space-between;
	margin: 0 30px;
`


const DaysToDisplay = (forecast, selected, handleChange) => {
	let daysToDisplay = []

	for (let date in forecast.forecast) {
		daysToDisplay.push(<DayContainer id={date} key={date} onClick={() => handleChange(date)} selected={date===selected}>{new Date(date).toDateString().slice(0, 3)}</DayContainer>)
	}

	return daysToDisplay
}

const DaySelector = ({handleDayChange}) =>  {
	const forecast = useContext(Context)
	const [selected, setSelected] = useState(Object.keys(forecast.forecast)[0])

	const handleChange = useCallback((date) => {
		setSelected(date)
		handleDayChange(date)
	}, [setSelected, handleDayChange])

	const dd = useMemo(() => DaysToDisplay(forecast, selected, handleChange)
	, [forecast, selected, handleChange])

	return (
		<DaySelectorStyle>{dd}</DaySelectorStyle>
	)
}

export default DaySelector