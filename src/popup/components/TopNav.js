import Typography from '@material-ui/core/Typography'
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
	color: #c789f2;
`

const Logo = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12.5604"
      cy="13.3517"
      r="11.1648"
      stroke="url(#paint0_linear)"
      stroke-width="2.79121"
    />
    <path
      d="M12.5605 7.69946V13.1947L17.2707 16.3348"
      stroke="#C789F2"
      stroke-width="1.88407"
      stroke-linecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="3.14011"
        y1="21.5159"
        x2="20.5677"
        y2="4.08833"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1B2378" />
        <stop offset="1" stop-color="#C789F2" />
      </linearGradient>
    </defs>
  </svg>
)

const TopNav = ({ theme }) => {
  return (
    <Wrapper style={{ zIndex: theme.zIndex.drawer - 1 }}>
      <TitleWrapper>
        <Logo />
        <Typography
          style={{ fontWeight: 550, marginLeft: 5, fontSize: 18 }}
        >
          AnyTime
				</Typography>
      </TitleWrapper>
    </Wrapper>
  )
}

export default withTheme(TopNav)
