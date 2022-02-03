import './App.css';
import registr from "./registr/Register"
import {Routes, Route} from "react-router-dom"
import Login from "./Login/Login"
// import "./Login/Login.css"
import AppRouter from './components/AppRouter';
import HomePage from './HomePage/HomePage';
import ForgotPassword from './ForgotPassword/ForgotPassword';
const App=()=> {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
