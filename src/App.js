import { Routes, Route } from 'react-router-dom';
import FooterMenu from './common/components/Footer-menu';
import { useAuth } from './useAuth';
import { Routelist } from './utils/Routelist';


function App() {
  const {user} = useAuth()

  console.log(user)
  return (
    <div>
      <Routes>
        {Routelist.map(route => {
          if(route.auth){
            return (
              <Route path={route.path} element={<route.element />}  key={route.path}/>
            )
          }

          return false
        })}
        
      </Routes>
      <FooterMenu />
      <hr />      
    </div>
  );
}

export default App;
