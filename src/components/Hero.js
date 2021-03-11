import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/macro';
import sliderData from '../data/sliderData'
import { Button } from './Button';
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoCaretBackOutline } from "react-icons/io5";

//1:28

const HeroSection = styled.section `
    height:100vh;
    max-height:1000px;
    position:relative;
    overflow:hidden;
`

const HeroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
    transition: all 0.5s ease-in-out;
   &:hover{
       color: #d6b89a;
       transform:scale(1.05)
   }
`

const HeroSlide = styled.div`
    width:100%;
    height:100%;
    margin:0;
    padding:0;   
    z-index:1;
`

const HeroSlider = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;

  //overlay
    &::before {
        content:'';
        position:absolute;
        z-index:2;
        width:100%;
        height:100vh;
        bottom:0vh;
        left:0;
        overflow:hidden;
        opacity:0.8;
        background: linear-gradient(0deg,
         rgba(0,0,0,0.4) 0%,
         rgba(0,0,0,0.4) 50%,
        rgba(0,0,0,0.8) 100%
        ); 
    }
    
`

const SliderImg = styled.img`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    object-fit:cover;
    
`
const SliderContent = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    max-width:1600px;
    width:80%;
    color:#ffffff;
    z-index:10;

    h1{
        //1st value: the smallest size,
        font-size:clamp(1rem, 8vw, 2rem );
        font-weight: 400;
        text-transform:uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align:left;
        margin-bottom:0.9rem;

    }

    p{
        margin-bottom:1.3rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }

    
`
const SliderBtns = styled.div`
    position:absolute;
    left:50%;
    transform: translate(-50%, -50%);
    bottom:2rem;
    display:flex;
    z-index: 10;

    @media screen and (max-width:420px) {
    bottom:4rem;
}

@media screen and (max-width:768px) {
    
    bottom:5rem;
}
    
`

const Arrow = styled(IoCaretForwardOutline)`
    margin-top:.3rem;
    
`

const Prev = styled(IoCaretBackOutline)`
    width:50px;
    height:50px;
    color:#ffffff;
    cursor:pointer;
    background:#816c58;
    border-radius:50px;
    padding:.7rem;
    margin-right:1rem;
    //specifies whether the text of an element can be selected
    user-select:none;

    @media screen and (max-width:420px) {
    width:35px;
    height:35px;
}
    


`
const Next = styled(IoCaretForwardOutline)`
    width:50px;
    height:50px;
    color:#ffffff;
    cursor:pointer;
    background:#816c58;
    border-radius:50px;
    padding:.7rem;
    margin-right:1rem;
    //specifies whether the text of an element can be selected
    user-select:none;

    @media screen and (max-width:420px) {
    width:35px;
    height:35px;
}

`

const Hero = () => {

    const [current, setCurrent] = useState(0)
    const length = sliderData.length

/* !!useRef is a hook which returns an object with a current property set to the value passed 
to the hook. This object is mutable so the current property can be changed. 
This object exists outside of React's render cycle, so the value persists 
throughout a components lifecycle */

 /* Ref.current is null because the ref is not set till after the function returns 
    and the content is rendered. The useEffect hook fires every time the value of contents 
    of the array passed to it changes */
    const timeout = useRef(null)

    useEffect(()=> {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)
        return function (){
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
      //if current is last slide, return the first one, if not, the slide after the current   
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
      //if current is first slide, return last slide, if not, the slide before the current  
        setCurrent(current === 0 ? length - 1 : current - 1  )
    }

    console.log(current)

    if(!Array.isArray(sliderData) || sliderData.length <= 0){
        
        return null

    }

    return (
        <HeroSection id="about">
            <HeroWrapper>
              {sliderData.map((slide, index) => {
                   return(
                       <HeroSlide key={index}>
                           { index === current && (
                             <HeroSlider id="rentals">
                             <SliderImg src={slide.img} alt={slide.alt}/>
                                 <SliderContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                         <Button to={slide.path}
                                         primary big slider>
                                             {slide.label}                                          
                                    <Arrow />
                                     </Button>
                                 </SliderContent>                             
                            </HeroSlider>  

                           )}
                           
                       </HeroSlide>
                   ) 
              })}  
            <SliderBtns>
                <Prev onClick={prevSlide} />
                <Next onClick={nextSlide} />
            </SliderBtns>    
          </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
