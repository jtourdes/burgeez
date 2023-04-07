import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme'

export default function Panels({content, isSelected}) {
  return (
    <StyledPanel isSelected={isSelected}>
      {content}
    </StyledPanel>
  )
}

const StyledPanel = styled.div`
  display : ${props => props.isSelected === true ? 'block' : 'none'};
  box-shadow: ${theme.shadows.large};
  height: 15rem;
  z-index: 3;
  background-color: ${theme.colors.white};
`
