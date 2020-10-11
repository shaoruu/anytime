import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import withTheme from '@material-ui/styles/withTheme'
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
const TIME_QUOTES = [
  {
    quote: 'Time waits for no one.',
    speaker: 'Folklore'
  },
  {
    quote: 'Time is the wisest counselor of all.',
    speaker: 'Pericles'
  },
  {
    quote: 'Lost time is never found again.',
    speaker: 'Benjamin Franklin'
  },
  {
    quote: 'Time is the most valuable thing a man can spend.',
    speaker: 'Theophrastus'
  }
]

const ResultsWrapper = styled.div`
	width: 100%;
	margin-top: 10px;
	padding: 8px;
  border-radius: 3px;
  font-weight: 500;
  color: #ffffff;
`

const ImageWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& img {
		height: 97px;
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

const ConvertedTime = ({ theme }) => {
  const { time, timeZoneFrom, timeZoneTo } = useTimeContext()
  const [addCalendar, setAddCalendar] = useState(false)

  if (time && timeZoneFrom && timeZoneTo) {
    const utcDate = parseFromTimeZone(time, { timeZone: timeZoneFrom })
    const output = formatToTimeZone(utcDate, 'M/D/YYYY HH:mmA dddd', {
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
        <ResultsWrapper style={{ background: theme.palette.primary.main }}>{output}</ResultsWrapper>
        <AddToCalendarWrapper>
          <Button
            style={{
              textTransform: 'none'
            }}
            startIcon={<CalendarTodayIcon style={{ color: theme.palette.primary.main }} />}
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

  const randomQuote = TIME_QUOTES[Math.floor(Math.random() * TIME_QUOTES.length)]

  return (
    <SectionCard>
      <SectionTitle>Converted Time</SectionTitle>
      <ImageWrapper>
        <img src={getChromeUrl(TimeIsLonelyPNG)} alt="time is lonely" />
        <Typography style={{ color: '#828282', fontSize: 14, textAlign: 'center' }}>
          “{randomQuote.quote}”
				</Typography>
        <Typography style={{ color: '#BDBDBD', fontSize: 14 }}>
          - {randomQuote.speaker}
        </Typography>
      </ImageWrapper>
    </SectionCard>
  )
}

export default withTheme(ConvertedTime)
