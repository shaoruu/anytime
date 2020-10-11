import Typography from '@material-ui/core/Typography'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import withTheme from '@material-ui/styles/withTheme'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 53px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	top: 0;
	background: #1b2378;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
`

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
  color: #C789F2;
`

const TopNav = ({ theme }) => {
  return (
    <Wrapper style={{ zIndex: theme.zIndex.drawer - 1 }}>
      <TitleWrapper>
        <AccessTimeIcon style={{ fontWeight: 550, fontSize: 28 }} />
        <Typography style={{ fontWeight: 550, marginLeft: 5, fontSize: 18 }}>AnyTime</Typography>
      </TitleWrapper>
    </Wrapper>
  )
}

export default withTheme(TopNav)
