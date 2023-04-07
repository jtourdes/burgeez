import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from "../../theme/index"
import {MdAdd, MdArrowDropDown, MdEdit} from "react-icons/md"


export default function AdminPanelTab() {
  // State
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHidden, setIsHidden] = useState(false);

  // Behavior
  function handleClick (index, className) {
    console.log(`click on ${index}`);
    setActiveIndex(index)
    return activeIndex === index ? className : "";
  }

  function checkActive (index, className) {
    console.log(index)
    console.log(className)
    return activeIndex === index ? className : "";
  }

  function checkSelected (index, className) {
    console.log(index)
    console.log(className)
    return activeIndex === index ? className : "";
  }

  function hidePanel (){
    setIsHidden(!isHidden)
  }

  // Render
  return (
    <TabsStyled >
      <div className="flex tabs">
         <button className="tab" onClick={()=>hidePanel(true)}>
            <MdArrowDropDown className="icon"/>
         </button>
         <div className={`flex hidden-${isHidden}`}>
            <button className={`tab ${checkSelected(1, "active-tab")}`} onClick={()=>handleClick(1)}>
                <MdAdd className="icon"/>
                <div>ajouter un produit</div>
            </button>
            <button className={`tab ${checkSelected(2, "active-tab")}`} onClick={()=>handleClick(2)}>
                <MdEdit className="icon"/>
                <div>modifier un produit</div>
            </button>
         </div>
      </div>
      <div className={`hidden-${isHidden}`}>
        <div className={`panel ${checkActive(1, "active-panel")}`}>panel 1</div>
        <div className={`panel ${checkActive(2, "active-panel")}`}>panel 2</div>
      </div>
    </TabsStyled>

  )
}

const TabsStyled = styled.div`

.flex{
  display: flex;
}
  .tabs {
    padding-left: 5rem;
  }

  .tab {
    background-color: red;
    height: 100px;
    height: 40px;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.XS};
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.greyDark};
    border: none;
    box-shadow: ${theme.shadows.small} ;
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 2;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    margin: auto 0.3rem ;
  }

  .active-tab{
    background-color: black;
    color: white;
  }
  
  .panel{
    display: none;
    box-shadow: ${theme.shadows.large};
    height: 15rem;
    z-index: 3;
    background-color: ${theme.colors.white};
  }

  .active-panel{
    display:block;
  }

  .hidden-true {
    display: none;
  }
`