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
    setActiveTabIndex(index)
  }
  //Render
  return (
    <AdminTabsStyled >
        <Tab Icon={<MdArrowDropDown />} />
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