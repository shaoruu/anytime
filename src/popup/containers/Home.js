import React from 'react'
import styled from 'styled-components'
import ConvertedTime from '../components/ConvertedTime'
import ConvertTo from '../components/ConvertTo'
import TimeToConvert from '../components/TimeToConvert'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`




export default () => {
  return (
    <HomeWrapper>
      <TimeToConvert />
      <ConvertTo />
      <ConvertedTime />
    </HomeWrapper>
  )
}
