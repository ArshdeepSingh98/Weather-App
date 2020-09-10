import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	margin: auto;
`

const Wrapper = (props) => {
	return (
		<WrapperStyle>
			{props.children}
		</WrapperStyle>
	)
}

export default Wrapper