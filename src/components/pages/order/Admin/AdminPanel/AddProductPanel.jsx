import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme'
import AddProductContext from '../../../../../context/AddProductContext'
import MenuContext from '../../../../../context/MenuContext'
import ImagePreview from '../ImagePreview'
import TextInput from '../TextInput'
import { textInputsConfig } from '../textInputsConfig'

export default function AddProductPanel({content, isSelected}) {
  // State
  const {newProduct, setNewProduct} = useContext(AddProductContext)
  const {menu, setMenu} = useContext(MenuContext)

  const [imagePreview, setImagePreview] = useState("")

  // Behavior
  const handleChange = (event) => {
    setNewProduct((prevValue)=>({
      ...prevValue,
      [event.target.name]: event.target.value
    }));
    console.log(newProduct)
  }

  const updateFormProductPhoto = (event) => {
    setImagePreview(event.target.value)
    console.log(imagePreview)
  }

  const updateMenu = (event) => {
    event.preventDefault()
    setMenu(prevValue => [...prevValue,newProduct])
    console.log(menu)
  }


  // Render
  return (
    <StyledPanel isSelected={isSelected}>
      <ImagePreview imgSource={imagePreview}/>
      <form>
        {textInputsConfig.map((input)=>{
          return <TextInput key={input.id} onChange={input.id !== 1 ? handleChange : (event)=> {handleChange(event); updateFormProductPhoto(event)}} {...input}/> 
        })}
        <div>
          <button onClick={updateMenu} className="form-button" type="submit">Ajouter le produit</button>
        </div>
      </form>
    </StyledPanel>
  )
  }


const StyledPanel = styled.div`
  display : ${props => props.isSelected === true ? 'flex' : 'none'};
  align-items: center;
  box-shadow: ${theme.shadows.large};
  height: 15rem;
  z-index: 3;
  background-color: ${theme.colors.white};
  align-items: start;
  padding-top: 2rem;
  padding-left: 5rem;

  form {
    margin-left: 1rem;
    color: ${theme.colors.greyDark};
  }

  .form-input {
    height: 35px;
    width: 600px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background_white};
    margin-bottom: 8px;
    border-radius: 5px;
    
  }

  input {
    height: 35px;
    border: none;
    background-color: ${theme.colors.background_white}

  }

  input:focus{
     border :none;
    }

  .icon {
    padding: 0 0.5rem;
  }


  .form-button {
      width: 10rem;
      height: 35px;
      border: none;
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
      border-radius: 5px;
      font-weight: ${theme.fonts.weights.semiBold};
      cursor: pointer;
    }

  
`
