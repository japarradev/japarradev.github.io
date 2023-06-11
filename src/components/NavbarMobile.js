import React , {useState} from 'react'
import './NavbarMobile.scss'
import {info} from "../info/Info";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import Toggler from "./home/Toggler";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
   
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function NavbarMobile({darkMode, handleClick}) {

  const [checkboxState, setCheckboxState] = useState(false);

  return (
        

        <Box component={'nav'} className='navbar'>
            <Box component={'div'} className='container nav-container'>
                <Box component={'input'} className='checkbox' checked={checkboxState} type="checkbox" name="" id="" onChange={()=>{
                    
                    if(checkboxState){
                        setCheckboxState(false)
                    }
                    else{
                        setCheckboxState(true)
                    }

                }} />
                <Box component={'div'} className='hamburger-lines'>
                    <Box component={'span'} className='line line1'></Box>
                    <Box component={'span'} className='line line2'></Box>
                    <Box component={'span'} className='line line3'></Box>
                </Box>
                <Box component={'div'} className='logo'>
                    <Box component={'h1'}>{info.initials}</Box>
                </Box>
                <Box component={'div'} className='menu-items'>
                    {
                    links.map((link, index) => (
                        <Box key={index} component={'li'}>
                            <Link to={link.to} onClick={()=>setCheckboxState(false)}>{link.name}</Link>
                        </Box>
                    ))
                    }  
                    <li>
                        <Toggler darkMode={darkMode} handleClick={handleClick}/>
                    </li>
                </Box>
                
            </Box>
        </Box>

  )
}
