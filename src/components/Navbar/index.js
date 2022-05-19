import React from 'react'
import { Link } from 'react-router-dom'
import './style.js'

import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js'
import style from './style.module.css'


const Navbar = () => {
  return (

     <NavbarSection>
     <div className="container">
       <Logo>
         <LogoText><a className={style.Logo} href="/">Ultra Profile</a></LogoText>
       </Logo>


       <UlList>
         <ListItem><Link className={style.LinkStyle} to={'/'}>Home</Link></ListItem>
         <ListItem><Anchor href="#work">Work</Anchor></ListItem>
         <ListItem><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
         <ListItem><Anchor href="#resume">Resume</Anchor></ListItem>
         <ListItem><Anchor href="#about">About</Anchor></ListItem>
         <ListItem><Link className={style.LinkStyle} to={'/contact'}>Contact</Link></ListItem>
       </UlList>

     </div>
   </NavbarSection>
  )
}

export default Navbar