import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../../reusable/Card'
import { formatPrice } from "../../../../utils/maths"
import MenuContext from '../../../../context/MenuContext'
import OrderPageContext from '../../../../context/OrderPageContext'

function Menu(props) {


  // State
  const {menu, setMenu} = useContext(MenuContext)
  const {isAdminMode} = useContext(OrderPageContext)


  // Behavior
  const deleteProduct = (id) => {
    setMenu((preValue)=>{
      return preValue.filter((product, index)=>{
        return index !== id
      })
    })
  }

  // Render
  return (
    <MenuStyled>
      {menu.map((item, index)=>
        <Card 
          // {...item} works as well
          key={index}
          id={index}
          title={item.title}  
          img={item.imageSource}
          leftDescription={formatPrice(item.price)}
          buttonLabel={"Ajouter"}
          isAdminMode={isAdminMode}
          deleted={deleteProduct}
          />
        
      )
      }
    </MenuStyled>
  )
  }

const MenuStyled = styled.div` 
  display: grid;
  grid-template-rows: repeat(3, minmax(21rem, 21rem));
  grid-template-columns: repeat(auto-fit, minmax(15rem, 2rem));
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export default Menu