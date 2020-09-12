import React, {useEffect, useState} from "react"
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
import TimeSelector from "./TimeSelector";


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
	const [time, setTime] = useState()

	const map_forecast_day_to_weather = (forecast_list) => {
		let response = {}
		let first_time_set_flag = false;

		for (let key in forecast_list) {
			const obj = forecast_list[key]
			const weather_data = {...obj.main, ...obj.weather[0]}
			const date_str = obj.dt_txt.slice(0, 10)
			const time_str = obj.dt_txt.slice(11)
			if (!first_time_set_flag) {
				setTime(time_str)
				first_time_set_flag = true
			}
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

	const convert_date_to_string = (date) => {
		const dd = String(date.getDate()).padStart(2, '0');
		const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = date.getFullYear();
		const display_date = `${yyyy}-${mm}-${dd}`
		return display_date
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
			setDate(convert_date_to_string(new Date()))
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

	const setBackgroundWeather = () => {
		const time_of_day = weather && weather.icon.slice(-1)==='d' ? 'day' : 'night'
		if (document.body) {
			document.body.background = `https://source.unsplash.com/1600x900/?${weather ? weather.main : time_of_day},${time_of_day}`;
		}
	}

	useEffect(() => {
		setBackgroundWeather()
	})

	const handleDayChange = (d) => {
		let new_weather_obj = forecast[d][Object.keys(forecast[d])[0]].weather_data
		setDate(d)
		setTime(Object.keys(forecast[d])[0])
		setWeather(new_weather_obj)
	}

	const handleTimeChange = (t) => {
		let new_weather_obj = forecast[date][t].weather_data
		setTime(t)
		setWeather(new_weather_obj)
	}

	return (
		<MainStyle>
			<Content>
				<Context.Provider value={{ api_call, weather, city, forecast, date, time}} >
					<EmptyContainer>
						<Header />
						<WeatherSearch />
					</EmptyContainer>
					{ weather && <WeatherData /> }
					{ forecast && <DaySelector handleDayChange={handleDayChange}/> }
					{ error && <Error error={error} /> }
				</Context.Provider>
			</Content>
			<Sidebar>
				<Context.Provider value={{forecast, date, time}} >
					{ forecast && <TimeSelector handleTimeChange={handleTimeChange} /> }
				</Context.Provider>
			</Sidebar>
		</MainStyle>
	)
}

export default Main