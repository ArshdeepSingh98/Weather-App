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
import DaySelector from "./DaySelector";


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
	const [date, setDate] = useState()   // day mapping => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	const map_forecast_day_to_weather = (forecast_list) => {
		let response = {}

		for (let key in forecast_list) {
			const obj = forecast_list[key]
			const weather_data = {...obj.main, ...obj.weather[0]}
			const date_str = obj.dt_txt.slice(0, 10)
			const time_str = obj.dt_txt.slice(11)
			response = {
				...response,
				[date_str]: {
					...response[date_str],
					[time_str]: { weather_data }
				}
			}
		}

		return response
	}

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

		const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${API_KEY}`
		const url2 = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${location}&appid=${API_KEY}`

		// api call for forecast
		const request2 = axios.get(url2)
		// api call of weather
		const request = axios.get(url)

		// response for weather
		try {
			const response = await request
			setWeather({...response.data.weather[0], ...response.data.main})
			setCity(response.data.name)
			setDate(new Date().toDateString())
			setError(null)
		} catch (err) {
			setError("Please enter valid city name.")
			setWeather(null)
			setCity(null)
		}

		// response for forecast
		try {
			const response = await request2
			setForecast(map_forecast_day_to_weather(response.data.list))
			setError(null)
		} catch (err) {
			setError("Enter valid city name.")
			console.log(err)
			setWeather(null)
			setCity(null)
			setForecast(null)
		}
	}

	const currentTime = new Date().getHours()
	if (document.body) {
		if (7 <= currentTime && currentTime < 20) {
			document.body.background = "https://source.unsplash.com/1600x900/?sun";
		}
		else {
			document.body.background = "https://source.unsplash.com/1600x900/?moon";
		}
	}

	const handleDayChange = (date) => {
		console.log("day changed", date)

	}

	return (
		<MainStyle>
			<Content>
				<Context.Provider value={{ api_call, weather, city, forecast, date}} >
					<EmptyContainer>
						<Header />
						<WeatherSearch />
					</EmptyContainer>
					{ weather && <WeatherData /> }
					{ forecast && <DaySelector handleDayChange={handleDayChange}/> }
					{ error && <Error error={error} /> }
				</Context.Provider>
			</Content>
			<Sidebar />
		</MainStyle>
	)
}

export default Main