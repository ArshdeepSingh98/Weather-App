import React, {useContext, useState, useMemo, useCallback, useEffect} from "react";
import styled from 'styled-components';
import Context from "../Context";

const TimeSelectorStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	height: 100%;
	width: 100%;
`

const TimeContainer = styled.div`
	display: flex;
	border: ${props => props.selected ? '1px solid white' : 'none'};
	align-items: center;
	justify-content: space-between;
	margin: 15px 0;
	width: 75%;
	padding: 8px 22px;
	border-radius: 30px;
	color: white;
`

const Temp = styled.div`
	font-size: 14px;
	font-weight: bold;
`

const convert_time = (time) => {
	return `${time.slice(0, 2)%12 || 12}${time.slice(2, 5)} ${time.slice(0, 2) >= 12 ? "PM" : "AM"}`
}

const TimeToDisplay = (forecast, selected, handleChange) => {
	let timeToDisplay = []

	for (let time in forecast) {
		const weather_obj = forecast[time]
		const time_to_display = convert_time(time)

		timeToDisplay.push(
			<TimeContainer id={time} key={time} onClick={() => handleChange(time)} selected={time===selected}>
				{time_to_display}
				<Temp>{weather_obj.weather_data.temp.toFixed(0)}&deg;C</Temp>
			</TimeContainer>
		)
	}

	return timeToDisplay
}

const TimeSelector = ({handleTimeChange}) => {
	const {forecast, date, time} = useContext(Context)

	const [selected, setSelected] = useState(time)

	useEffect(() => {
		setSelected(time)
	}, [time, setSelected])

	const handleChange = useCallback((time) => {
		setSelected(time)
		handleTimeChange(time)
	}, [setSelected, handleTimeChange])

	const tt = useMemo(() => TimeToDisplay(forecast[date], selected, handleChange)
		, [forecast, date, selected, handleChange])
	return <TimeSelectorStyle>{tt}</TimeSelectorStyle>
}

export default TimeSelector