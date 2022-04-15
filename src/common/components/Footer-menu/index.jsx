import { Link } from 'react-router-dom';
import CatalogButton from '../Catalog-button';
import HomeButton from '../home-button';
import PersonalButton from '../Personal-area-button';
import ShoppingButton from '../Shopping-button';
import './index.scss';
import { useState } from 'react';
import { useAuth } from './../../../useAuth';
import { getAuth } from 'firebase/auth';

const FooterMenu = () => {
  const auth = getAuth()

  console.log(auth)
  
  return (
    <div className='footer'>
      <div className='footer_menu'>
        <Link to='/'> {<HomeButton />} </Link>
        <Link to='/catalogs'> {<CatalogButton />} </Link>
        <Link to='/cart'> {<ShoppingButton />} </Link>
        {/* {auth.currentUser?.emailVerified ? <Link to='/personalArea'> {<PersonalButton />} </Link> : !auth.currentUser !== null ? <Link to='/auth'> {<PersonalButton />} </Link> : auth.currentUser ===  null ? <Link to='/registration'> {<PersonalButton /> } </Link> : '/'} */}
        {
          auth.currentUser === null ? <Link to='/registration'> {<PersonalButton />} </Link> : auth.currentUser && <Link to='/personalArea'> {<PersonalButton />} </Link> 
        }
      </div>
    </div>
  )
}

export default FooterMenu;