import { Link } from 'react-router-dom';
import CatalogButton from '../Catalog-button';
import HomeButton from '../home-button';
import PersonalButton from '../Personal-area-button';
import ShoppingButton from '../Shopping-button';
import './index.scss';
import { useState } from 'react';
import { useAuth } from './../../../useAuth';

const FooterMenu = () => {
  const {user} = useAuth()

  
  console.log(user)
  return (
    <div className='footer'>
      <div className='footer_menu'>
        <Link to='/'> {<HomeButton />} </Link>
        <Link to='/catalogs'> {<CatalogButton />} </Link>
        <Link to='/cart'> {<ShoppingButton />} </Link>
        {user ? <Link to='/personalArea'> {<PersonalButton />} </Link> :  <Link to='/registration'> {<PersonalButton />} </Link>}
      </div>
    </div>
  )
}

export default FooterMenu;