import InputAdornment from '@material-ui/core/InputAdornment'
import DateRangeIcon from '@material-ui/icons/DateRange'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from '@material-ui/pickers'
import 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { SectionCard, SectionTitle, useTimeContext } from '../shared'
import TimeZoneSelector from './TimeZoneSelector'

const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	width: 100%;
`

const TimeToConvert = () => {
  const { time, setTime, setTimeZoneFrom } = useTimeContext()

  return (
    <SectionCard style={{ marginTop: 19 }}>
      <SectionTitle>Time to Convert</SectionTitle>
      <FormWrapper>
        <MuiPickersUtilsProvider
          utils={require('@date-io/date-fns').default}
        >
          <DatePicker
            inputVariant="outlined"
            value={time}
            onChange={setTime}
            animateYearScrolling
            showTodayButton
            margin="dense"
            format="MM/dd/yyyy"
            clearable
            InputProps={{
              placeholder: 'Select Date',
              endAdornment: (
                <InputAdornment position="end">
                  <DateRangeIcon
                    style={{ color: '#C4C4C4' }}
                  />
                </InputAdornment>
              )
            }}
          />
          <TimePicker
            clearable
            inputVariant="outlined"
            value={time}
            showTodayButton
            todayLabel="Now"
            onChange={setTime}
            margin="dense"
            style={{ marginLeft: 5 }}
            InputProps={{
              placeholder: 'Select Time',
              endAdornment: (
                <InputAdornment position="end">
                  <DateRangeIcon
                    style={{ color: '#C4C4C4' }}
                  />
                </InputAdornment>
              )
            }}
          />
        </MuiPickersUtilsProvider>
      </FormWrapper>
      <TimeZoneSelector placeholder="Choose Time Zone to Convert from" storageKey="timeZoneFrom" setTimeZone={setTimeZoneFrom} shouldEmpty />
    </SectionCard>
  )
}

export default TimeToConvert
