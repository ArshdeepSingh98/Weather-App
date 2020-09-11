import React, {useContext} from 'react'
import styled from 'styled-components'

import Context from "../Context";

const HeaderStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

const HeaderTitle = styled.div`
	font-size: 16px;
	color: rgba(0,0,0,.7);
`

const Header = () => {
	const {city, date} = useContext(Context)
	const today = date ? new Date(date) : new Date()
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	const yyyy = today.getFullYear();
	const display_date = `${dd}.${mm}.${yyyy}`

	return (
		<HeaderStyle>
			<HeaderTitle>{city}</HeaderTitle>
			<HeaderTitle>{display_date}</HeaderTitle>
		</HeaderStyle>
	)
}

export default Header