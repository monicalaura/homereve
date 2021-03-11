import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import navData from '../data/navData'
import { Button } from './Button';

const DropdownContainer = styled.div`
    position:fixed;
    top: ${ ({isOpen}) => (isOpen ? '0' : '-100%')}; 
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#a48c74;
    z-index:999;
    width:100%;
    height:100%;
    transition: all 0.3s ease-in-out;
    opacity: ${ ({isOpen}) => (isOpen ? '1' : '0')}; 

`

const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.2rem;
    font-size:2rem;
    background:transparent;
    cursor: pointer;
    outline:none;
`
const CloseIcon = styled(FaTimes)`
    color:#ffffff;
    
`
const DropdownWrapper = styled.div`
        
    
`
const DropdownMenu = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
    
`
const DropdownLink = styled(Link)`
    display:flex;
    justify-content:center;
    font-size:1.4rem;
    margin-bottom:2rem;
    color:#ffffff;
    text-decoration:none;
    list-style-type:none;
    transition: all 0.5s ease-in-out;

    &:hover{
       background: #d6b89a;
       color: #816c58;
       
   }

`
const BtnWrap = styled.div`
    
`
const DropdownBtn = styled(Button)`
    border-radius:0;
    padding:1rem;
    font-size:1.3rem;

    &:hover{

       transform: translate(0)
       
   }
`

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {navData.map((item, index) => {
                        return (
                        <DropdownLink to= {item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                        )
                         })}
                </DropdownMenu>
                <BtnWrap>
                    <DropdownBtn to="/contact">
                        Contact us
                    </DropdownBtn>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
