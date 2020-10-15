import React from 'react'
import styled from 'styled-components'
import TopNav from '../components/TopNav'
import Home from './Home'

const AppWrapper = styled.div`
	width: 400px;
	height: 535px;
	overflow: auto;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}
`

export default () => {
	return (
		<AppWrapper>
			<TopNav />
			<Home />
		</AppWrapper>
	)
}
