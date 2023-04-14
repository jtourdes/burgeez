import React from 'react'
import styled from 'styled-components'
import {theme} from "../../../../theme/index"

export default function ImagePreview({imgSource, altTitle}) {
  return (
    <ImagePreviewStyled>
        
        <img src={imgSource} alt={altTitle} />
        
      </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
    height: 120px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    color: ${theme.colors.greyMedium};

    //border
    border-radius: 5px;
    border: 1px dashed;
    border-color: ${theme.colors.greyLight};

    img {
      height: 120px;
      max-width: 200px;
      object-fit: contain;
      object-position: center;
    }
`
