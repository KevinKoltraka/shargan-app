import React, { useEffect, useState } from 'react'
import './dark.css'
const Dark = () => {

  const [theme, setTheme]= useState('light-theme');
   
  const darkModeBtn = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
 }

   };
  useEffect(() => {
    document.body.className = theme;
   }, [theme]);


  return (
    <>
    
    <button className='thisisdarkmode' onClick={darkModeBtn}>    {theme === 'light-theme' ? 'Enable Dark' : 'Disable Dark'}
    </button>

    </>


    )
}

export default Dark