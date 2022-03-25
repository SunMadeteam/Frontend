import {Routes, Route, useNavigate} from "react-router-dom"
import Login from "./Pages/Login/Login"
import HomePage from './Pages/HomePage/HomePage';
import './App.scss'


import { MainPage } from "./Pages/MainPage/MainPage";
const App=()=> {
  const navigate = useNavigate()
  return (
    <div className="container">
      <Routes>
          <Route path="/*" element={<MainPage/>}/>
          <Route path="/HomePage/*" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;