import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import DateRangeIcon from '@material-ui/icons/DateRange'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from '@material-ui/pickers'
import 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { useTimeContext } from '../shared'
import TimeZoneSelector from './TimeZoneSelector'

const Wrapper = styled.div`
	display: flex;
	width: 364px;
  margin: 19px;
  padding: 16px 18px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #f7f9fc;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	width: 100%;
`

const TimeToConvert = () => {
  const { time, setTime, setTimeZone } = useTimeContext()

  return (
    <Wrapper>
      <Typography>Time to Convert</Typography>
      <FormWrapper>
        <MuiPickersUtilsProvider
          utils={require('@date-io/date-fns').default}
        >
          <DatePicker
            inputVariant="outlined"
            value={time}
            onChange={setTime}
            animateYearScrolling
            margin="dense"
            format="MM/dd/yyyy"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DateRangeIcon style={{ color: '#C4C4C4' }} />
                </InputAdornment>
              )
            }}
          />
          <TimePicker
            clearable
            inputVariant="outlined"
            value={time}
            onChange={setTime}
            margin="dense"
            style={{ marginLeft: 5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <DateRangeIcon style={{ color: '#C4C4C4' }} />
                </InputAdornment>
              )
            }}
          />
        </MuiPickersUtilsProvider>
      </FormWrapper>
      <TimeZoneSelector setTimeZone={setTimeZone} />
    </Wrapper>
  )
}

export default TimeToConvert
