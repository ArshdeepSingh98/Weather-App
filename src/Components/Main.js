import React, {useState} from "react"
import styled from 'styled-components'
import axios from 'axios'

import Context from "../Context";

import WeatherSearch from "./WeatherSearch";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WeatherData from "./WeatherData";
import Error from "./Error";


const MainStyle = styled.div`
	height: 80vh;
	box-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);
	width: 85%;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 3px;
	overflow: hidden;
	display: flex;
`

const EmptyContainer = styled.div`
	flex-grow: 1;
`


const Main = () => {
	const [weather, setWeather] = useState()
	const [forecast, setForecast] = useState()
	const [city, setCity] = useState()
	const [error, setError] = useState()

	const api_call = async e => {
		e.preventDefault()

		const location = e.target.elements.location.value
		if (!location) {
			setError("Please enter the name of the city.")
			setWeather(null)
			setCity(null)
			return
		}

		const API_KEY = 'b924be4d69eac0e8eef619e2bd530262'

		// api call for weather of displayed city
		const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${API_KEY}`
		const request = axios.get(url)
		try {
			const response = await request
			setWeather({...response.data.weather[0], ...response.data.main})
			setCity(response.data.name)
			setError(null)
		} catch (err) {
			setError("Please enter valid city name.")
			setWeather(null)
			setCity(null)
		}

		// paid data
		// api call for next 5 days
		// TODO: mock it
		// const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=${location}&appid=${API_KEY}`

		// setForecast(response.list)

	}

	// console.log(forecast)

	const currentTime = new Date().getHours()
	if (document.body) {
		if (7 <= currentTime && currentTime < 20) {
			document.body.background = "https://source.unsplash.com/1600x900/?sun";
		}
		else {
			document.body.background = "https://source.unsplash.com/1600x900/?moon";
		}
	}

	return (
		<MainStyle>
			<Content>
				<Context.Provider value={{ api_call, weather, city }} >
					<EmptyContainer>
						<Header />
						<WeatherSearch />
					</EmptyContainer>
					{ weather && <WeatherData /> }
					{ error && <Error error={error} /> }
				</Context.Provider>
			</Content>
			<Sidebar />
		</MainStyle>
	)
}

export default Main