import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.div`
	width: 33.34%;
	background: rgba(0, 0, 0, 0.3);
	height: 100%;
	padding: 2em 2.5em;
`


const Sidebar = (props) => (
	<SidebarStyle>
		{props.children}
	</SidebarStyle>
)

export default Sidebar