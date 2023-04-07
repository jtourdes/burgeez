import styled from 'styled-components'
import AdminPanelTab from './AdminPanelTab.jsx'

export default function AdminPanel() {
    
const tabs = {
    1:{
        icon:"MdAdd",
        title:"Ajouter un produit"
    },
    2:{
        icon:"MdEdit",
        title:"Modifier un produit"
    }
}

// State


//Behavior


//Render


  return (
    <AdminPanelStyled>
      <AdminPanelTab/>
    </AdminPanelStyled>

  )
}

const AdminPanelStyled = styled.div`
background-color: transparent;


`