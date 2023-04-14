import React, { useState } from 'react'
import styled from 'styled-components'
import {MdAdd, MdArrowDropDown, MdEdit} from "react-icons/md"
import Tab from './Tab';
import AddProductPanel from './AdminPanel/AddProductPanel';


export default function Admin() {
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
  const [isHidden, setHidden] = useState(true)

  // Behavior
  const selectTab = (index) => {
    setActiveIndex(index)
    return(activeIndex === index ? true : false);
  }

  const hidePanel = () => {
    setHidden(!isHidden)
    console.log(isHidden);
  }


  // Render
  return (
    <AdminStyled className="flex">
      <div className="tabs flex">
        <Tab Icon={<MdArrowDropDown />} onClick={()=>hidePanel()}/>
          {isHidden ? 
          <div className="flex">
              {tabs.map((tab, index)=>{
                return (
                  <Tab
                    key={index}
                    onClick={()=>selectTab(index)}
                    Icon={tab.Icon} 
                    label={tab.title}
                    isSelected={activeIndex === index ? true : false}
                  />
                )
              })}
            </div>
          : null}
      </div>
      {isHidden ? 
        <div>
          {panels.map((panel, index)=>{
            return (<Panel 
            key={index}
            content={panel.content}
            isSelected={activeIndex === index ? true : false}
            />)
          })}
        </div>
      : null}
    </AdminStyled>

  )
}

const AdminStyled = styled.div`
.flex {
  display: flex;
}
  .tabs {
    padding-left: 5rem;
  }
`
