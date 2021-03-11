import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import logo from '../images/logo.png';
import navData from '../data/navData'
import { Button } from './Button';


const Nav = styled.nav`
  position:fixed;
  display:flex;
  justify-content:space-between;
  width:100%;
  height:45px;
  background: #a48c74;
  padding: 1rem 2rem;
  z-index:99;

`
const Logo = styled(Link)`
   margin-left:2rem;
   max-width:200px;  

   @media screen and (max-width:768px) {
        margin-left: 0.2rem
    } 
`

const MenuBars = styled(FaBars)`
@media screen and (max-width:768px) {
    color: #ffffff;
    display:block;
    margin-top:.3rem;
    margin-right:4rem;
    font-size:1.8rem;
    cursor:pointer;
}
@media screen and (min-width:770px) {
        display:none
    }

`
const NavMenu = styled.div`
    display:flex;
    align-items:center; 
    justify-content:center;
    margin:0 auto;

    @media screen and (max-width:768px) {
        display:none
    }

`
const NavLinks = styled(LinkScroll)`
    color:#ffffff;
    padding: .5rem 1rem 0 1rem;
    font-size:1.2rem;
    text-decoration:none;
    height:100%;
    cursor:pointer;
    transition: all 0.5s ease-in-out;
   &:hover{
       color: #272422
   }

`
const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:4rem;

    @media screen and (max-width:768px) {
        display:none
    }
    
`

const Navbar = ({toggle}) => {
    return (
         <Nav>
           <Logo to= "/">
             <img src={logo} alt="logo" width="135px"></img>                       
           </Logo> 
           <MenuBars onClick={toggle} />
           <NavMenu>
           
               {navData.map((item, index) => {
                   return <NavLinks to={item.link}
                            smooth={true}
                            spy={true}
                            duration={700} 
                        key={index}>
                        {item.title}
                   </NavLinks>               
                   } 
               )}
           </NavMenu> 
           <NavBtn>
           <Button to="/contact" primary big> Contact us</Button>
           </NavBtn>
        </Nav>   
    )
}

export default Navbar
