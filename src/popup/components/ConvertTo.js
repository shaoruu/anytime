import 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { SectionCard, SectionTitle, useTimeContext } from '../shared'
import TimeZoneSelector from './TimeZoneSelector'

const SelectorWrapper = styled.div`
	width: 100%;
	padding-top: 10px;
`

const ConvertTo = () => {
	const { setTimeZoneTo } = useTimeContext()

	return (
		<SectionCard>
			<SectionTitle>Convert to</SectionTitle>
			<SelectorWrapper>
				<TimeZoneSelector placeholder="Choose Time Zone to Convert to" storageKey="timeZoneTo" setTimeZone={setTimeZoneTo} />
			</SelectorWrapper>
		</SectionCard>
	)
}

export default ConvertTo
