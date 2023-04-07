import styled from 'styled-components'
import AdminPanelTabs from './AdminPanelTabs.jsx'

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
      <AdminPanelTabs/>
    </AdminPanelStyled>

  )
}

const AdminPanelStyled = styled.div`
background-color: transparent;


`