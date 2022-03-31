import { Children, createContext, useEffect, useMemo, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const auth = getAuth()
  const [user , setUser] = useState()
  useEffect(() => {
    const unListen = onAuthStateChanged(auth , authUser => {
      setUser({
        id:authUser.uid,
        name:authUser.displayName
      })
    })


    return () => {
      unListen()
    }
  }, [])


  const values = useMemo(() => ({
    user,
    setUser
  }) , [user , auth])


  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}


export default AuthProvider