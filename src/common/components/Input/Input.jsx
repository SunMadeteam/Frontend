import React from 'react'
import './index.scss'
import { useAuth } from './../../../useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const Input = ({placeholder,onBlur,value,direct,number }) => {
  



  return (
    <div className='loop'>
        {direct === 'name' ? (
          <input 
            className='input' 
            placeholder={placeholder} 
            value={value}
            onBlur={onBlur}
            />
          )
          : (
            <input 
              className='input' 
              placeholder={placeholder} 
              defaultValue={number}
              onBlur={onBlur}
              />
          )
        }
        
    </div>
  )
}

export default Input