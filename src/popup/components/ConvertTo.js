import Typography from '@material-ui/core/Typography'
import 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { useTimeContext } from '../shared'
import TimeZoneSelector from './TimeZoneSelector'

const Wrapper = styled.div`
	display: flex;
	width: 364px;
	margin: 19px;
	margin-top: 0;
	padding: 16px 18px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #ffffff;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const SelectorWrapper = styled.div`
	width: 100%;
	padding-top: 10px;
`

const ConvertTo = () => {
	const { setTimeZoneTo } = useTimeContext()

	return (
		<Wrapper>
			<Typography>Convert to</Typography>
			<SelectorWrapper>
				<TimeZoneSelector setTimeZone={setTimeZoneTo} />
			</SelectorWrapper>
		</Wrapper>
	)
}

export default ConvertTo
