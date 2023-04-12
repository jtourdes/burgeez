import { createContext } from "react";
export default createContext({
    newProduct : {
        title:"",
        imageSource:"",
        price:1

    },
    setNewProduct: ()=>{}
});