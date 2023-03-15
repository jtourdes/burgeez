import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/ErrorPage';
import './App.css';
import "./theme/index.js"

function App() {
  return (
    <Routes> // define acessible routes inside the component
      <Route path="/" element={<LoginPage />}/> //precise for each route a specific URL and a component
      <Route path="/order/:username" element={<OrderPage />}/> //precise that there is an URL variable to avoid routings erros
      <Route path="*" element={<ErrorPage />}/>
    </Routes>   
  );
}

export default App;
