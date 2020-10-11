import Typography from '@material-ui/core/Typography'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 53px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopNav = () => {
  return <Wrapper>
    <TitleWrapper>
      <TimelapseIcon />
      <Typography style={{ marginLeft: 5 }}>AnyTime</Typography>
    </TitleWrapper>

  </Wrapper>
}

export default TopNav 