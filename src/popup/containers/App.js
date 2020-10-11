import React from 'react'
import styled from 'styled-components'
import TopNav from '../components/TopNav'
import Home from './Home'

const AppWrapper = styled.div`
	width: 400px;
	height: 530px;
	overflow: auto;
`

export default () => {
	return (
		<AppWrapper>
			<TopNav />
			<Home />
		</AppWrapper>
	)
}
