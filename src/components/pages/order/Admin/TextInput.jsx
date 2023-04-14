import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../../theme/index"

export default function TextInput({Icon, onChange, ...extraProps}) {
  return (
    <TextInputStyled>
        <div className="Icon">{Icon && Icon}</div>
        <input onChange={onChange} {...extraProps}/>
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    height: 35px;
    width: 600px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background_white};
    margin-bottom: 8px;
    border-radius: 5px;


  input {
    height: 35px;
    border: none;
    background-color: ${theme.colors.background_white}

  }

  input:focus{
     border :none;
    }

  .Icon {
    padding: 0 0.5rem;
  }
`