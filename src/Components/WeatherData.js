import React, {useContext} from "react";
import styled from 'styled-components'

import Context from "../Context";

const WeatherDataStyle = styled.div`
	display: flex;
	flex-direction: row;	
	align-items: center;
	justify-content: center;
	flex-grow: 3;
	padding: 0 2em;
`

const WeatherIconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 0 5em;
`

const WeatherIcon = styled.img`
	position: absolute;
	top: -135px;
	right: -100px;
	filter: drop-shadow(5px 7px 3px rgba(0,0,0,0.4));    
`

const WeatherDataContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const TextStyle = styled.div`
	font-size: ${props => props.fontSize ?? '16px'};
	font-wight: ${props => props.bold ?? 'normal'};	
`

const convert_time = (time) => {
	return `${time.slice(0, 2)%12 || 12}${time.slice(2, 5)} ${time.slice(0, 2) >= 12 ? "PM" : "AM"}`
}

const WeatherData = () => {
	const {weather, date, time} = useContext(Context)

	const weather_icon_url = `http://openweathermap.org/img/wn/${weather && weather.icon}@4x.png`
	const temp = weather && weather.temp
	const weather_type =  weather && weather.main
	const today = new Date(date)
	const day = today.getDay()
	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	return (
		<WeatherDataStyle>
			<WeatherIconContainer>
				<WeatherIcon src={weather_icon_url} alt=''/>
				<TextStyle fontSize ={'72px'} bold>{temp}&deg;C</TextStyle>
			</WeatherIconContainer>
			<WeatherDataContainer>
				{time && <TextStyle>{convert_time(time)}</TextStyle> }
				<TextStyle fontSize={'36px'} bold>{weekday[day]}</TextStyle>
				<TextStyle>{weather_type}</TextStyle>
			</WeatherDataContainer>
		</WeatherDataStyle>

	)
}

export default WeatherData