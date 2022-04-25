import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FooterMenu from './common/components/Footer-menu';
import { useAuth } from './useAuth';
import { Routelist } from './utils/Routelist';


function App() {
  const {user} = useAuth()
  const { number , name , password } = JSON.parse(localStorage.getItem('user'))

  // const ask = window.confirm('')
  useEffect(() => {
    // if(ask){
      fetch(`https://sunmadebackend.herokuapp.com/api1/v1/register/`, {
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          number:number,
          name: name,
          password: password,
        })

      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

    // }
        // fetch('https://sunmadebackend.herokuapp.com/api/cart/', {
        //   method:'POST',
        //   headers:{
        //     'Content-type':'application/json'
        //   },
        //   body:JSON.stringify({
        //     user:'124'
        //   })
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))
  //    }
  // 
  // fetch('https://sunmadebackend.herokuapp.com/api1/v1/register/')
  // .then(res => res.json())
  // .then (res => console.log(res))
}, [])

  console.log(user)
  return (
    <div>
      <Routes>
        {Routelist.map(route => {
          if(!route.auth && !user){
            return false
          }

          return (
            <Route path={route.path} element={<route.element />}  key={route.path}/>
          )
        })}
      </Routes>
      <FooterMenu />
      <hr />      
    </div>
  );
}


export default App;
