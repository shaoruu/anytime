import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import 'date-fns'
import {
  convertToTimeZone,
  formatToTimeZone,
  parseFromTimeZone
} from 'date-fns-timezone'
import React, { useState } from 'react'
import styled from 'styled-components'
import TimeIsLonelyPNG from '../../assets/time.png'
import { calendarGenerators, getChromeUrl } from '../../utils'
import { SectionCard, SectionTitle, useTimeContext } from '../shared'
import Apple from './CalendarButtons/Apple'
import Google from './CalendarButtons/Google'
import Outlook from './CalendarButtons/Outlook'
import Yahoo from './CalendarButtons/Yahoo'

const CALENDAR_DURATION = 10

const ResultsWrapper = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 8px;
	background: #e0e0e0;
	border-radius: 3px;
`

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    height: 74px;
  }
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

  if (time && timeZoneFrom && timeZoneTo) {
    const utcDate = parseFromTimeZone(time, { timeZone: timeZoneFrom })
    const output = formatToTimeZone(utcDate, 'M/D/YYYY HH:mm:ssA dddd', {
      timeZone: timeZoneTo
    })
    const outputDate = convertToTimeZone(utcDate, {
      timeZone: timeZoneTo
    })


    const links = calendarGenerators({
      title: 'Do Something Productive',
      start: outputDate,
      duration: CALENDAR_DURATION,
      address: 'The Internet',
      description: 'Do something productive with AnyTime.'
    })

    return (
      <SectionCard>
        <SectionTitle>Converted Time</SectionTitle>
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
              <Link href={links.ical} target="_blank">
                <Apple />
              </Link>
              <Link href={links.google} target="_blank">
                <Google />
              </Link>
            </CalendarRow>
            <CalendarRow>
              <Link href={links.yahoo} target="_blank">
                <Yahoo />
              </Link>
              <Link href={links.outlook} target="_blank">
                <Outlook />
              </Link>
            </CalendarRow>
          </Collapse>
        </AddToCalendarWrapper>
      </SectionCard>
    )
  }

  return <SectionCard>
    <SectionTitle>Converted Time</SectionTitle>
    <ImageWrapper>
      <img src={getChromeUrl(TimeIsLonelyPNG)} alt="time is lonely" />
      <Typography style={{ color: '#828282', fontSize: 14 }}>Time is lonely...</Typography>
    </ImageWrapper>
  </SectionCard>

}

export default ConvertedTime
