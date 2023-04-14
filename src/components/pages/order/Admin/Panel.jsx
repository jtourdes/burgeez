import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../theme'
import {MdOutlineAddAPhoto, MdEuro} from "react-icons/md"
import {FaHamburger} from "react-icons/fa"
import AddProductContext from '../../../../context/AddProductContext'
import OrderPageContext from '../../../../context/OrderPageContext'
import MenuContext from '../../../../context/MenuContext'

export default function Panels({content, isSelected}) {
  // State
  const {newProduct, setNewProduct} = useContext(AddProductContext)
  const {menu, setMenu} = useContext(MenuContext)

  const [formProductImg, setFormProductImg] = useState("")

  // Behavior
  const handleChange = (event) => {
    setNewProduct((prevValue)=>({
      ...prevValue,
      [event.target.name]: event.target.value
    }));
    console.log(newProduct)
  }

  const updateFormProductPhoto = (event) => {
    setFormProductImg(event.target.value)
    console.log(formProductImg)
  }


  const updateMenu = (event) => {
    event.preventDefault()
    setMenu(prevValue => [...prevValue,newProduct])
    console.log(menu)
  }


  // Render
  return (
    <StyledPanel isSelected={isSelected}>
      <div className="product-img">
        {formProductImg === "" ? "Aucune image" :
        <img className="product-img" src={formProductImg} alt="" />
        }
      </div>
      <form>
        <div className="form-input">
          <FaHamburger className="icon"/>
          <input onChange={handleChange} name="title" type="text" placeholder="Nom du produit à ajouter" id="product-name"/>
        </div>
        <div className="form-input">
        <MdOutlineAddAPhoto className="icon"/>
          <input onChange={(event)=>{handleChange(event); updateFormProductPhoto(event)}} name="imageSource" type="url" placeholder="Lien URL de l'image" id="product-img"/>
        </div>
        <div className="form-input">
        <MdEuro className="icon"/>
          <input onChange={handleChange} name="price" type="number" placeholder="Prix" id="product-price"/>
        </div>
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

  .product-img {
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
    
  }
`
