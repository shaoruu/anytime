import Typography from '@material-ui/core/Typography'
import 'date-fns'
import { formatToTimeZone, parseFromTimeZone } from 'date-fns-timezone'
import React from 'react'
import styled from 'styled-components'
import { useTimeContext } from '../shared'

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

const ResultsWrapper = styled.div`
	width: 100%;
	padding-top: 10px;
`

const ConvertedTime = () => {
  const { time, timeZoneFrom, timeZoneTo } = useTimeContext()

  const utcDate = parseFromTimeZone(time, { timeZone: timeZoneFrom })
  const output = formatToTimeZone(utcDate, 'M/D/YYYY HH:mm:ssA', {
    timeZone: timeZoneTo
  })

  return (
    <Wrapper>
      <Typography>Convert to</Typography>
      <ResultsWrapper>{output}</ResultsWrapper>
    </Wrapper>
  )
}

export default ConvertedTime
