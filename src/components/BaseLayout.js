import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid, Hidden} from "@mui/material";
import NavbarMobile from './NavbarMobile';
import Error404 from './Error404';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Hidden smDown>
                  <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>
               </Hidden>
               <Hidden smUp>
                  <NavbarMobile darkMode={darkMode} handleClick={handleToggleDarkMode}/>
               </Hidden>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'*'} element = {<Error404/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'0.7rem'} sx={{opacity: 0.5}} width={'100%'}>
                  <p style={{fontSize:'8px'}}>template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a> &copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

