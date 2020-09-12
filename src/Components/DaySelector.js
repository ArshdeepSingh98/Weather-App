import React, {useContext, useState, useMemo, useCallback} from "react";
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
	padding: 22px 8px;
	border-radius: 30px;
	border: ${props => props.selected ? '1px solid gray' : 'none'};
	height: 100px;
	align-items: center;
	justify-content: space-between;
	margin: 0 30px;
`

const Temp = styled.div`
	font-size: 14px;
	font-weight: bold;
`

const DaysToDisplay = (forecast, selected, handleChange) => {
	let daysToDisplay = []

	for (let date in forecast.forecast) {
		let date_to_temp = new Map()
		let obj = forecast.forecast[date]
		let i = 0;
		for (let time in obj) {
			let weather_obj = obj[time]
			if (weather_obj && weather_obj.weather_data) {
				date_to_temp.set(date, (((date_to_temp.get(date) ?? 0)*i + weather_obj.weather_data.temp)/(i+1)).toFixed(0))
				i++;
			}
		}
		daysToDisplay.push(
			<DayContainer id={date} key={date} onClick={() => handleChange(date)} selected={date===selected}>
				{new Date(date).toDateString().slice(0, 3)}
				<Temp>{date_to_temp.get(date)}&deg;C</Temp>
			</DayContainer>
		)
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