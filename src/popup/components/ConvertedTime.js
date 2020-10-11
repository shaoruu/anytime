import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import 'date-fns'
import { formatToTimeZone, parseFromTimeZone } from 'date-fns-timezone'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTimeContext } from '../shared'
import Apple from './CalendarButtons/Apple'
import Google from './CalendarButtons/Google'
import Outlook from './CalendarButtons/Outlook'
import Yahoo from './CalendarButtons/Yahoo'

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
	margin-top: 10px;
	padding: 8px;
	background: #e0e0e0;
	border-radius: 3px;
`

const AddToCalendarWrapper = styled.div`
	margin-top: 10px;
`


const CalendarRow = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 4px;
`

const ConvertedTime = () => {
  const { time, timeZoneFrom, timeZoneTo } = useTimeContext()
  const [addCalendar, setAddCalendar] = useState(false)

  const utcDate = parseFromTimeZone(time, { timeZone: timeZoneFrom })
  const output = formatToTimeZone(utcDate, 'M/D/YYYY HH:mm:ssA dddd', {
    timeZone: timeZoneTo
  })

  return (
    <Wrapper>
      <Typography>Converted Time</Typography>
      <ResultsWrapper>{output}</ResultsWrapper>
      <AddToCalendarWrapper>
        <Button
          style={{
            textTransform: 'none'
          }}
          startIcon={<CalendarTodayIcon />}
          onClick={() => setAddCalendar(!addCalendar)}
        >
          Add to Calendar
				</Button>
        <Collapse in={addCalendar}>
          <CalendarRow>
            <Apple />
            <Google />
          </CalendarRow>
          <CalendarRow>
            <Yahoo />
            <Outlook />
          </CalendarRow>
        </Collapse>
      </AddToCalendarWrapper>
    </Wrapper>
  )
}

export default ConvertedTime
