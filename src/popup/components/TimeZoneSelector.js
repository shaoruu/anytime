import TextField from '@material-ui/core/TextField'
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete'
import cityTimeZones from 'city-timezones'
import { formatToTimeZone } from 'date-fns-timezone'
import jstz from 'jstz'
import React, { useState } from 'react'

const userTimeZone = jstz.determine().name()

const { cityMapping } = cityTimeZones
const timeZoneLookupsArray = []

const temp = new Date('2018-09-01Z16:01:36.386Z')
const format = '([GMT] Z)'

cityMapping.forEach((timeZone) => {
  const { city, country, timezone } = timeZone
  if (timezone)
    timeZoneLookupsArray.push({
      timeZone: timezone,
      lookup: `${formatToTimeZone(temp, format, {
        timeZone: timezone
      })} ${city}, ${country}`
    })
})

const timeZoneDict = {}

timeZoneLookupsArray.forEach((tz) => (timeZoneDict[tz.timeZone] = tz))

const filterOptions = createFilterOptions({
  limit: 20
})

const defaultTimeZone = timeZoneDict[userTimeZone]

const TimeZoneSelector = ({ setTimeZone, shouldEmpty }) => {
  const [value, setValue] = useState(shouldEmpty ? {} : defaultTimeZone)
  const [inputValue, setInputValue] = useState('')

  return (
    <Autocomplete
      fullWidth
      id="combo-box-demo"
      filterOptions={filterOptions}
      options={timeZoneLookupsArray}
      getOptionLabel={(option) => option.lookup}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        if (newValue)
          setTimeZone(newValue.timeZone)
        else
          setTimeZone(null)
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) =>
        setInputValue(newInputValue)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Choose Time Zone or City"
          margin="dense"
          variant="outlined"
          style={{ marginTop: 0, marginBottom: 0 }}
        />
      )}
    />
  )
}

export default TimeZoneSelector
