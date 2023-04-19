import React, { useContext } from 'react'
import styled from 'styled-components'
import Tab from '../../reusable/Tab'
import { tabsConfigs } from './tabsConfig'
import { MdArrowDropDown } from 'react-icons/md'
import OrderPageContext from '../../../../context/OrderPageContext'

export default function AdminTabs() {
  //State
  const {activeTabIndex, setActiveTabIndex} = useContext(OrderPageContext)

  //Behavior
  const selectTab = (index) => {
    console.log("old" + activeTabIndex)
    setActiveTabIndex(index)
    console.log("new" + activeTabIndex)

  }

  const log = (index)=>{
    console.log("down" + activeTabIndex)
    
  }

  //Render
  return (
    <AdminTabsStyled >
        <Tab Icon={<MdArrowDropDown />} onClick={log}/>
        {tabsConfigs.map((tab, index)=>{
          return (
            <Tab
              key={tab.id}
              onClick={()=> selectTab(index)}
              Icon={tab.Icon} 
              label={tab.title}
              isSelected={activeTabIndex === tab.id ? true : false}
            />
          )
        })}
      </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex
`