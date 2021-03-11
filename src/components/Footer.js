import React from 'react'
import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
  import logo from '../images/logo.png';



//Footer wrapper
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: #a48c74;
  padding: 4rem 0 2rem 0;
  
`;

//Footer bottom links wrapper
export const FooterLinksWrapper = styled.div`
  display: flex;
  margin-bottom:4rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

//Footer bottom links container
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  
  @media screen and (max-width: 820px) {
    padding-top: 2.5rem;
  }
`;

//Footer bottom links div
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.4rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: #ffffff;

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    padding: .8rem;
    
  }
`;

//Footer bottom links title
export const FooterLinkTitle = styled.h2`
  margin-bottom: 1.4rem;
  color: #816c58;
  font-weight:500
`;

//Footer bottom links 
export const FooterLink = styled(LinkScroll)`
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition:all 0.3s ease-in-out;
  
  &:hover {
    color: #d6b89a;
    cursor:pointer;
    
  }
`;

//Footer bottom links scroll 
export const FooterScrollLink = styled(LinkScroll)`
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #d6b89a;
    cursor:pointer;
    
  }
`;

export const SocialMedia = styled.section`
width:100%;
 border-top: 1px solid rgba(28,37,43,0.20);

`;


export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 1.5rem auto 0 auto;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  
`;

export const Copyright = styled.small`
  color:#ffffff ;

  @media screen and (max-width: 820px) {
    margin-top:1rem;
  }
 
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;

  @media screen and (max-width: 820px) {
    margin-top:1rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #ffffff;
  font-size:1.2rem ;
  &:hover{
      color:#d6b89a
  }
`;

const Footer = () => {
    return (
        <>
        <FooterWrapper>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About us</FooterLinkTitle>            
            <FooterLink to='about'>About</FooterLink>
            <FooterLink to='houses'>Houses</FooterLink>
            <FooterLink to='rentals'>Rentals</FooterLink>
            <FooterLink to='/'>Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterScrollLink to='contact'
             smooth={true}
             spy={true}
             duration={700}>
               Contact
               </FooterScrollLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
            <FooterLink to='/'>Link 4</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Twitter</FooterLink>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>           
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Other Links</FooterLinkTitle>
            <FooterLink to='/'>Other Link 1</FooterLink>
            <FooterLink to='/'>Other Link 2</FooterLink>
            <FooterLink to='/'>Other Link 3</FooterLink>
            <FooterLink to='/'>Other Link 4</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
            <FooterLogo to='/'>
                       <img src={logo} alt="Alphcons Logo"/>                          
            </FooterLogo>
          <Copyright>HomeReve © 2021</Copyright>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//https://www.youtube.com/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterWrapper>
    </>
    )
}

export default Footer
