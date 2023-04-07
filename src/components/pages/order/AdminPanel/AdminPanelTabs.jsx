import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from "../../../../theme/index"
import {MdAdd, MdArrowDropDown, MdEdit} from "react-icons/md"
import Tab from './Tab';


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

            <Tab index={5} Icon={<MdArrowDropDown/>} label={"essai"}/>

            
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