import React from "react"
import styled from 'styled-components'


const ContentStyle = styled.div`
	background: rgba(240, 240, 240, 0.3);
	width: 100%;
	height: 100%;
	padding: 2em 2.5em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const Content = props => (
	<ContentStyle>
		{props.children}
	</ContentStyle>
)

export default Content