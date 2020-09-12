import React, {useContext, useState, useMemo, useCallback} from "react";
import styled from 'styled-components';

const TimeSelectorStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	height: 100%;
	width: 100%;
`

const TimeSelector = ({handleTimeChange, forecast}) => {

	const tt = 'yo'

	return <TimeSelectorStyle>{tt}</TimeSelectorStyle>
}

export default TimeSelector