import {MdOutlineAddAPhoto, MdEuro} from "react-icons/md"
import {FaHamburger} from "react-icons/fa"

export const textInputsConfig = [
   {
        id : 0,
        Icon : <FaHamburger/>,
        name :"title",
        placeholder :"Nom du nouveau produit",
        type :"text"     
    },
   {
        id : 1,
        Icon : <MdOutlineAddAPhoto/>,
        name :"imageSource",
        placeholder :"Url de l'image du produit",
        type :"url"     
    },
    {
        id : 2,
        Icon : <MdEuro/>,
        name :"price",
        placeholder :"Prix",
        type :"number"     
    }    
]