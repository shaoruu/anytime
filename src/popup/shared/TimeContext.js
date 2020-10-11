import { createContext, useContext } from 'react'

export const TimeContext = createContext({
	time: null,
	setTime: () => {},
	timeZoneFrom: null,
	setTimeZoneFrom: () => {},
	timeZoneTo: null,
	setTimeZoneTo: () => {}
})

export const useTimeContext = () => {
	const context = useContext(TimeContext) || {}

	return context
}
