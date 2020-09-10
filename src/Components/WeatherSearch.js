import React, {useContext} from "react";
import styled from 'styled-components'

import Context from "../Context";

const WeatherForm = styled.form`
	display: flex;
	width: 100%;
	margin: 2em 0;
`
const WeatherInput = styled.input`
	display: inline-block;
	width: 100%;
	border: none;
	background: rgba(0, 0, 0, 0.05);
	padding: 0.5rem 2rem;
	border-radius: 2px;
	
	&:focus {
		outline: none;
		box-shadow: -2px 0 0 gray;
	}
`

const WeatherSubmit = styled.button`
	display: inline-block;
	text-align: center;
	border: none;
	background-color: rgba(0, 0, 0, 0.05);
	font-size: 1.5rem;
	height: auto;
	width: 30px;
	position: relative;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
}
`

const WeatherSymbol = styled.div`
	color: gray;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	
	&:focus {
		background: pink;
	}
`

const WeatherSearch = () => {
	const {api_call} = useContext(Context)

	return (
		<WeatherForm onSubmit={api_call}>
			<WeatherInput placeholder="Enter the name of the city to get started" name="location" autoComplete="off" type="text"/>
			<WeatherSubmit>
				<WeatherSymbol>&rarr;</WeatherSymbol>
			</WeatherSubmit>
		</WeatherForm>
	)
}

export default WeatherSearch