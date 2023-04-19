import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Panel from '../../reusable/Panel'
import { tabsConfigs } from "./tabsConfig"
import AdminTabs from './AdminTabs'
import OrderPageContext from '../../../../context/OrderPageContext'


export default function Admin() {
    // State
  const {activeTabIndex, setActiveTabIndex} = useContext(OrderPageContext)

  // Behavior


  // Render
  return (
    <AdminStyled className="flex">
      <AdminTabs />
      {tabsConfigs.map((tab)=>{
        return <Panel key={tab.id} content={tab.content} isActive={tab.id === activeTabIndex ? true : false}/>
      })}
    </AdminStyled>

  )
}

const AdminStyled = styled.div`
`
