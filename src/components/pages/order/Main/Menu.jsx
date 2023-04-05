import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../Card'
import { fakeMenu2 } from '../../../../fakeMenu'
import { formatPrice } from "../../../../utils/maths"

function Menu(props) {
  // State
  const [menu, setMenu] = useState(fakeMenu2) 

  // Behavior


  // Render


  return (
    <MenuStyled>
      {menu.map((item)=>
        <Card 
          // {...item} works as well
          title={item.title}  
          img={item.imageSource}
          leftDescription={formatPrice(item.price)}
          buttonLabel={"Ajouter"}
          />
      )}
    </MenuStyled>
  )
  }

const MenuStyled = styled.div` 
  display: grid;
  grid-template-rows: repeat(4, minmax(21rem, 21rem));
  grid-template-columns: repeat(auto-fit, minmax(15rem, 2rem));
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export default Menu