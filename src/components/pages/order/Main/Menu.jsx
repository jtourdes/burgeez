import React, { useEffect } from 'react'
import styled from 'styled-components'
import FoodCard from './FoodCard'
import { fakeMenu2 } from '../../../../fakeMenu'

function Menu(props) {
  // State

  // Behavior

  // Render


  return (
    <MenuStyled>
      {fakeMenu2.map((item)=>
        <FoodCard 
          title={item.title} 
          img={item.imageSource}
          price={item.price}
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