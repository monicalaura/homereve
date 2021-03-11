import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import infoData from '../data/infoData'

const Section = styled.section`
    width:100%;
    height:100%;
    padding:4rem 0;

`
const InfoContainer = styled.div`
    padding: 3rem calc((100vh - 1300px) / 2);
    display:flex;
    flex-direction:row;

    @media screen and (max-width:768px) {
       flex-direction:column
    }
    @media screen and (max-width:480px) {
       padding-top:0;
    }
`
const ColLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:1rem 2rem;
    max-width:700px;
    line-height:1.4;
    order: ${ ({imgFirst}) => (imgFirst ? '2' : '1')}; 

    h1{
        color: #816c58;
        margin-bottom:3rem;
        font-size: clamp(1.5rem, 6vw, 2rem)
    }


    @media screen and (max-width:480px) {
      padding:1.4rem;
    }
        
`
const ColRight = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:1rem 2rem;
    order: ${ ({imgFirst}) => (imgFirst ? '1' : '2')}; 
    

    img{
        width:100%;
        height:auto;
        height:400px;

        @media screen and (max-width:480px) {
        min-height:230px;
        padding:1.4rem;
    }
    }

    @media screen and (max-width:768px) {
       flex-direction:column;
       order: ${ ({imgFirst}) => (imgFirst ? '2' : '1')};
    }

`
const BtnInfo = styled(Button)`
    background: #816c58;
    color:#ffffff;
    margin-top:2rem;

   &:hover{
       color: #272422;
       background:transparent;
   }
`

const InfoSection = () => {
    return (
        <Section id="houses">
            
                {infoData.map((data)=> {
                  const{ id,
                      heading,
                    paragraphOne,
                    btnLabel,
                    img,
                    imgFirst,
                    } = data
                return ( <InfoContainer key={id}>
                <ColLeft imgFirst= {imgFirst}>
                 <h1>{heading}</h1>
                 <p>{paragraphOne}</p>
                 <BtnInfo to="/houses">{btnLabel}</BtnInfo>
                </ColLeft>
                <ColRight imgFirst= {imgFirst} >
                  <img src={img} alt="house" />
                </ColRight>
                </InfoContainer>
               )
                })}
                
            
        </Section>
    )
}

export default InfoSection
