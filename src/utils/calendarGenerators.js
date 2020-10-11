const MS_IN_MINUTES = 60 * 1000

const formatTime = (date) => {
  return date.toISOString().replace(/-|:|\.\d+/g, '')
}

const calculateEndTime = (event) => {
  return event.end
    ? formatTime(event.end)
    : formatTime(
      new Date(event.start.getTime() + event.duration * MS_IN_MINUTES)
    )
}

const calendarGenerators = function (e) {
  const ics = function (event) {
    const startTime = formatTime(event.start)
    const endTime = calculateEndTime(event)

    const href = encodeURI(
      'data:text/calendar;charset=utf8,' +
      [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'URL:' + document.URL,
        'DTSTART:' + (startTime || ''),
        'DTEND:' + (endTime || ''),
        'SUMMARY:' + (event.title || ''),
        'DESCRIPTION:' + (event.description || ''),
        'LOCATION:' + (event.address || ''),
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n')
    )

    return href
  }

  const generators = {
    google: function (event) {
      const startTime = formatTime(event.start)
      const endTime = calculateEndTime(event)

      const href = encodeURI(
        [
          'https://www.google.com/calendar/render',
          '?action=TEMPLATE',
          '&text=' + (event.title || ''),
          '&dates=' + (startTime || ''),
          '/' + (endTime || ''),
          '&details=' + (event.description || ''),
          '&location=' + (event.address || ''),
          '&sprop=&sprop=name:'
        ].join('')
      )
      return href
    },

    yahoo: function (event) {
      const eventDuration = event.end
        ? (event.end.getTime() - event.start.getTime()) / MS_IN_MINUTES
        : event.duration

      // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
      const yahooHourDuration =
        eventDuration < 600
          ? '0' + Math.floor(eventDuration / 60)
          : Math.floor(eventDuration / 60) + ''

      const yahooMinuteDuration =
        eventDuration % 60 < 10
          ? '0' + (eventDuration % 60)
          : (eventDuration % 60) + ''

      const yahooEventDuration = yahooHourDuration + yahooMinuteDuration

      // Remove timezone from event time
      const st =
        formatTime(
          new Date(
            event.start -
            event.start.getTimezoneOffset() * MS_IN_MINUTES
          )
        ) || ''

      const href = encodeURI(
        [
          'http://calendar.yahoo.com/?v=60&view=d&type=20',
          '&title=' + (event.title || ''),
          '&st=' + st,
          '&dur=' + (yahooEventDuration || ''),
          '&desc=' + (event.description || ''),
          '&in_loc=' + (event.address || '')
        ].join('')
      )

      return href
    },

    ical: event => ics(event),

    outlook: event => ics(event)
  }

  const calendars = {}
  Object.keys(generators).forEach(key => {
    const generator = generators[key]
    calendars[key] = generator(e)
  })

  return calendars
}

export { calendarGenerators }
