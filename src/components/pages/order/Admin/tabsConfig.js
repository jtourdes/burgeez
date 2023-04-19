import AddProductPanel from "../Admin/AdminPanel/AddProductPanel"
import ModifyProductPanel from "../Admin/AdminPanel/ModifyProductPanel"
import { MdAdd, MdEdit } from "react-icons/md"

export const tabsConfigs = [
        {
          id: 0,
          Icon : <MdAdd/>,
          title:"Ajouter un produit",
          content : <AddProductPanel/>
        },
        {
          id :1,
          Icon: <MdEdit/>,
          title:"Modifier un produit",
          content: <ModifyProductPanel/>
        }
      ]