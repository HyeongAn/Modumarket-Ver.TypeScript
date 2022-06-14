import styled from 'styled-components'
import {Link} from "react-router-dom"

interface SectionProps {
    background: string;
}

interface AboutSectionProps {
    direction: string;
}

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: black;
  
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
  }
`
export const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    background-color: #FF6767;
    font-size: 0.5rem;
    font-weight:700;
    width : 7.5rem;
    height : 1.5rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    color : white;
    &:hover {
        color: #FF6767;
        transition: all 0.3s;
        border: 1px solid #FF6767;
        background-color: #fff;
    }
    @media (min-width : 480px){
        font-size: 0.8rem;
        font-weight:700;
        width : 9rem;
        height : 1.8rem;
    }
    @media (min-width : 767px){
        font-size: 1.1rem;
        font-weight:700;
        width : 13rem;
        height : 2.6rem;
    }

    @media (min-width: 1024px){
        font-size: 1.2rem;
        font-weight:700;
        width : 16rem;
        height : 2.8rem;
    }
    
`

export const Section = styled.section<SectionProps>`
    width: 100vw;
    padding: 1rem 0;
    background-color: ${(props) => 
        props.background === '#f4f4f4' ? "#f4f4f4" : "white"  };
`

export const Wrap = styled.div`
    width: 100%;
    padding : 1rem 0;
`

export const IntroduceSection = styled.div<AboutSectionProps>`
    width : 100%;
    display : flex;
    direction : ${(props) => 
        props.direction === "right" ? "right" : "left" };
    justify-content : center;
    align-items : center;

`

export const IntroducePhoto = styled.div<AboutSectionProps>`
    padding: ${(props) => 
        props.direction === "right" ? "0 0 0 1rem" : "0 1rem 0 0" };
    @media (min-width : 480px){
       
    }
    @media (min-width : 767px){
    
    }

    @media (min-width: 1024px){
        
    }
    img{
        width : 9.2rem;
        height :9.2rem;

        @media (min-width : 480px){
            width : 14rem;
            height : 14rem;
        }
        @media (min-width : 767px){
            width : 20rem;
            height : 20rem;
        }
    
        @media (min-width: 1024px){
            width : 23.31rem;
            height :24rem;
        }
    }
`

export const IntroduceContent = styled.div<AboutSectionProps>`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    padding: ${(props) => 
        props.direction === "right" ? "0 1rem 0 0" : "0 0 0 1rem" };
    line-height: 1rem;
    font-size : 0.5rem;

    & > h3 {
    font-size: 0.9rem;
    font-weight: 800;
    margin-bottom: 0.5rem;

        @media (min-width : 480px){
            font-size: 1.1rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }
        @media (min-width : 767px){
            font-size: 1.4rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }

        @media (min-width: 1024px){
            font-size: 1.6rem;
            margin-bottom: 1rem;
        
        }
    }

    & > p {
        
        @media (min-width : 480px){
            font-size: 0.75rem;
            line-height: 1.1rem;
        }
        @media (min-width : 767px){
            font-size: 1.2rem;
            line-height: 1.5rem;
        }

        @media (min-width: 1024px){
            line-height: 1.5rem;
            font-size : 1.1rem; 
        
        } 
    }

    & > h2 {
        padding-bottom: 0.5rem;
        line-height: 1.3rem;
        font-size : 0.9rem;
        font-weight : 700;
        @media (min-width : 480px){
            font-size : 1.2rem;
            line-height: 1.4rem;
            font-weight : 800;
        }
        @media (min-width : 767px){
            font-size : 1.5rem;
            line-height: 1.8rem;
            font-weight : 800;
        }

        @media (min-width: 1024px){
            padding-bottom: 1rem;
            line-height: 2.2rem;
            font-size : 1.8rem; 
        
        }
    }


`