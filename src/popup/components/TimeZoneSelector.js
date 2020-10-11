import TextField from '@material-ui/core/TextField'
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete'
import cityTimeZones from 'city-timezones'
import { formatToTimeZone } from 'date-fns-timezone'
import jstz from 'jstz'
import React, { useEffect, useState } from 'react'
import { getChromeValues, setChromeValue, shuffle } from '../../utils'

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

shuffle(timeZoneLookupsArray)

const TimeZoneSelector = ({ storageKey, setTimeZone, shouldEmpty }) => {
  const [value, setValue] = useState(shouldEmpty ? null : defaultTimeZone)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const syncChrome = async () => {
      const storage = await getChromeValues([storageKey])
      const valueStorage = storage[storageKey]

      if (valueStorage && valueStorage !== 'null') {
        const actualStorage = JSON.parse(valueStorage)
        setValue(actualStorage)
        setTimeZone(actualStorage.timeZone)
      }
    }

    syncChrome()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
        setChromeValue({ [storageKey]: JSON.stringify(newValue) })

        if (newValue) {
          setTimeZone(newValue.timeZone)
        }
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
