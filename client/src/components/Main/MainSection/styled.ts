import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const Section = styled.section`
    padding: 2rem 0;
    width: 100vw;
    background-color: #fff;
    @media (min-width : 480px){
       padding : 1rem 0;
    }
    
    @media (min-width:767px){
        
       
    }
    @media (min-width: 1024px){
       padding : 4rem 0 ;
       
    }

`

export const Wrap = styled.div`
    width : 100vw;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    @media (min-width : 480px){
       
    }
    
    @media (min-width:767px){
        
       
    }
    @media (min-width: 1024px){
        padding: 2rem 0;
       
    }
    
`

export const MainContent = styled.div`
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const MainText = styled.div`
    width : 55%;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    flex-direction : column;
    margin-left: 1.2rem;
    letter-spacing: 0.2px;
    @media (min-width : 480px){
        width : 45%;      
    }
    @media (min-width:767px){
        width : 40%;
        padding-left : 5rem;
        
    }
    @media (min-width: 1024px){
        width : 40%;
        font-size : 1.2rem;
        padding-left : 15rem;
        
    }
    & > span{
        color : #A8A7A7;
        font-size : 0.7rem;
        font-weight: 700;
        @media (min-width : 480px){
          font-size : 0.9rem;
        }
        
        @media (min-width:767px){
            font-size : 1.1rem;
            line-height : 1.2rem;
        
        }
        @media (min-width: 1024px){
            font-size : 1.8rem;
            line-height : 1.2rem;
        }

    }

    & > h1{
        font-size : 1.8rem;
        font-weight: 900;
        margin: 0.6rem 0 0.6rem 0;
        @media (min-width : 480px){
           font-size: 2.3rem;
        }
        
        @media (min-width:767px){
            font-size : 3rem;
            
        
        }
        @media (min-width: 1024px){
            font-size : 3.75rem;
        
        }
    }

    & > h2{
        font-size : 0.8rem;
        font-weight: 500;
        line-height : 1rem;
        @media (min-width : 480px){
            font-size : 0.9rem;
        }
        
        @media (min-width:767px){
            font-size : 1.1rem;
            line-height : 1.2rem;
        
        }
        @media (min-width: 1024px){
            font-size : 1.8rem;
            line-height : 2rem;
            
        }
    }

    & > p {
        
        line-height : 0.7rem;
        font-size : 0.05rem;
        font-weight: 500;
        @media (min-width : 480px){
           font-size : 0.7rem;
           line-height : 0.9rem;
        }
        
        @media (min-width:767px){
           font-size : 0.9rem;
           line-height: 1rem;;
        
        }
        @media (min-width: 1024px){
            font-size : 1.2rem;
            line-height : 1.5rem;
        }
    }

    
    
`

export const MainPhoto = styled.div`
    display: flex;
    width : 45%;
    @media (min-width : 480px){
        width : 55%;
    }
    @media (min-width : 767px){
        width : 60%;
    }
    @media (min-width : 1024px){
        width : 65%;
    }
    img{
        display: block;
        width : 11rem;
        height : 11rem;
        @media (min-width : 480px){
            width  : 17rem;
            height : 17rem;
        }
    
        @media (min-width:767px){
            width : 24rem;
            height : 24rem;
        
        }
        @media (min-width: 1024px){
            width : 29rem;
            height : 29rem;
        
        }
    }
`

export const ButtonWrap = styled.div`
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
`

export const SearchButton = styled.button`
  
    background-color: #FF6767;
    border: none;
    border-radius: 4px;
    color : white;
    font-size : 0.5rem;
    font-weight: 700;
    cursor: pointer;
    width: 5rem;
    height: 1.5rem;
    &:hover {
        color: #FF6767;
        transition: all 0.3s;
        border: 1px solid #FF6767;
        background-color: #fff;
    }
    @media (min-width : 480px){
       font-size: 0.7rem;
       width : 6.3rem;
       height : 1.7rem;
    }
    
    @media (min-width:767px){
        font-size: 0.9rem;
        width : 8rem;
        height : 2.15rem;
       
    }
    @media (min-width: 1024px){
        font-size : 1rem;
        width: 9rem;
        height: 2.5rem;
        
    }
    
`

export const RegisterButton = styled.button`
    background-color: #fff;
    border: 1px solid #848484;
    color : #848484;
    font-size : 0.5rem;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    width: 5rem;
    height: 1.5rem;
    margin-left : 0.7rem;
    &:hover {
        color: #fff;
        transition: all 0.3s;
        background-color: #848484;
    }
    @media (min-width : 480px){
        font-size: 0.7rem;
        width : 6.3rem;
        height : 1.7rem;
    }
    
    @media (min-width:767px){
        font-size: 0.9rem;
        width : 8rem;
        height : 2.15rem;
       
    }
    @media (min-width: 1024px){
        width: 9rem;
        height: 2.5rem;
        font-size : 1rem;
    }
`