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
	filter: drop-shadow(2px 2px 2px rgb(100,100,100));    
`

const WeatherDataContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const TextStyle = styled.div`
	font-size: ${props => props.fontSize ?? '16px'};
	font-wight: ${props => props.bold ?? 'normal'};	
`

const WeatherData = () => {
	const weather = useContext(Context)
	// console.log("weather", weather)

	const weather_icon_url = `http://openweathermap.org/img/wn/${weather && weather.weather && weather.weather.icon}@4x.png`
	const temp = weather && weather.weather && weather.weather.temp
	const weather_type =  weather && weather.weather && weather.weather.main
	const today = new Date()
	const day = today.getDay()
	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	const hours = (today.getHours() % 12) || 12;
	const minutes = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const time = `${hours}:${minutes} ${ampm}`

	return (
		<WeatherDataStyle>
			<WeatherIconContainer>
				<WeatherIcon src={weather_icon_url} alt=''/>
				<TextStyle fontSize ={'72px'} bold>{temp}&deg;C</TextStyle>
			</WeatherIconContainer>
			<WeatherDataContainer>
				<TextStyle>{time}</TextStyle>
				<TextStyle fontSize={'36px'} bold>{weekday[day]}</TextStyle>
				<TextStyle>{weather_type}</TextStyle>
			</WeatherDataContainer>
		</WeatherDataStyle>

	)
}

export default WeatherData