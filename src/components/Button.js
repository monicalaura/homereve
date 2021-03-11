import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
   font-size: ${ ({primary}) => (primary ? '1.2rem' : '1.1rem')}; 
   background: ${ ({slider}) => (slider ? '#816c58' : 'transparent')}; 
   display:flex;
   justify-content:center;
   align-items:center;
   max-width:9rem;
   padding: ${ ({big}) => (big ? '.5rem 1rem .5rem 1rem' : '.3rem .8rem .3rem .8rem')};
   color:#ffffff;
   text-decoration:none;
   border:2px solid #816c58;
   border-radius:7px;
   outline:none;
   transition: all 0.5s ease-in-out;
   &:hover{
       background: #272422;
       transform: translate(-2px)
   }
   
`