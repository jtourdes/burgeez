import {createContext} from "react";
export default createContext({
    isAdminMode: "",
    setAdminMode: ()=>{},

    isTabSelected: false,
    setIsTabSelected: ()=>{},

    activeTabIndex: 0,
    setActiveTabIndex: ()=>{}
});