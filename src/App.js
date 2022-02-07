import {Routes, Route} from "react-router-dom"
import Login from "./Pages/Login/Login"
import HomePage from './Pages/HomePage/HomePage';
const App=()=> {
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
