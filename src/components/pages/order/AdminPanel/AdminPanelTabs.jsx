import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from "../../../../theme/index"
import {MdAdd, MdArrowDropDown, MdEdit} from "react-icons/md"
import Tab from './Tab';
import Panel from './Panel';


export default function AdminPanelTab() {
  const tabs = [
    {
      Icon : <MdAdd/>,
      title:"Ajouter un produit"
    },
    {
      Icon: <MdEdit/>,
      title:"Modifier un produit"
    }
  ]

  const panels = [
    {
      content:"sujet 1"
    },
    {
      content:"sujet 2"
    }
  ]
  
  // State
  const [activeIndex, setActiveIndex] = useState(0);

  // Behavior
  const handleClick = (index) => {
    setActiveIndex(index)
    return(activeIndex === index ? true : false);
  }


  // Render
  return (
    <TabsStyled >
      <div className="flex tabs">
        <Tab Icon={<MdArrowDropDown />}/>
        <div className="flex">
          {tabs.map((tab, index)=>{
            return (
              <Tab
                key={index}
                onClick={()=>handleClick(index)}
                Icon={tab.Icon} 
                label={tab.title}
                isSelected={activeIndex === index ? true : false}
              />
            )
          })}
        </div>   
      </div>
      <div>
        {panels.map((panel, index)=>{
          return (<Panel 
          key={index}
          content={panel.content}
          isSelected={activeIndex === index ? true : false}
          />)
        })}
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
`
