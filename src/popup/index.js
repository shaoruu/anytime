import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import 'antd/dist/antd.css'
import jstz from 'jstz'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { getChromeValues, setChromeValue } from '../utils'
import App from './containers/App'
import './index.scss'
import { TimeContext } from './shared'

const userTimeZone = jstz.determine().name()

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Verdana',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 12
  },
  palette: {
    primary: {
      light: '#484f93',
      main: '#1B2378',
      dark: '#121854',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d2a0f4',
      main: '#C789F2',
      dark: '#8b5fa9',
      contrastText: '#000',
    },
  },
})

const Root = () => {
  const [time, setTime] = useState(null)
  const [timeZoneFrom, setTimeZoneFrom] = useState('')
  const [timeZoneTo, setTimeZoneTo] = useState(userTimeZone)

  useEffect(() => {
    const syncChrome = async () => {
      const storage = await getChromeValues(['time'])
      const { time: timeStorage } = storage
      if (timeStorage) {
        const timeMoment = new Date(timeStorage)
        setTime(timeMoment)
      }
      setChromeValue({ time: '' })
    }

    syncChrome()
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <TimeContext.Provider
        value={{
          time,
          setTime,
          timeZoneTo,
          setTimeZoneTo,
          timeZoneFrom,
          setTimeZoneFrom
        }}
      >
        <App />
      </TimeContext.Provider>
    </MuiThemeProvider>
  )
}

function render() {
  ReactDOM.render(<Root />, document.getElementById('root'))
}

// const test = calendarGenerators({
//   title: 'Get on the front page of HN', // Event title
//   start: new Date('June 15, 2013 19:00'), // Event start date
//   duration: 120, // Event duration (IN MINUTES)
//   end: new Date('June 15, 2013 23:00'), // You can also choose to set an end time.
//   // If an end time is set, this will take precedence over duration
//   address: 'The internet',
//   description:
//     'Get on the front page of HN, then prepare for world domination.'
// })

// console.log(test)

render()
