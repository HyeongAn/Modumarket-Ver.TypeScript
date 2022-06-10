import styled from 'styled-components';

export const Section = styled.section`
    width:100%;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
    
    
`

export const Wrap = styled.div`
    display: flex;
    max-width: 32rem;
    width : 60%;
    padding : 0.5rem 1rem;
    @media (min-width : 480px){
        width : 50%;
    }

    @media (min-width:767px){
        width : 38%
    
    }
    @media (min-width: 1024px){
        width : 40%;
        padding: 2rem 0;
    }
    
`

export const ImgWrap = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
    padding : 0;
    width : 40%;
    @media (min-width : 480px){
        width : 40%;
    }

    @media (min-width:767px){
        width : 30%;
        padding-right : 2rem;
    
    }
    @media (min-width: 1024px){
        width : 20%;
        padding-right: 5rem;
    }
    img{
        width:7rem;
        height: 4rem;

        @media (min-width : 480px){
            width : 10rem;
            height : 4.5rem;
        }

        @media (min-width:767px){
            width : 12rem;
            height : 6.5rem;
    
        }
        @media (min-width: 1024px){
            width:14.375rem;
            height: 7.5rem;
        }
    }

    
`


export const CategoryUl = styled.ul`
    max-width :100%;
    display : flex;
    flex-shrink: 0;
    justify-content : space-evenly;
    flex-wrap: wrap;
    margin: 0rem;
    
    @media (min-width : 480px){
        
    }

    @media (min-width:767px){
        padding: 0 1rem 0 2rem;
    
    }
    @media (min-width: 1024px){
        padding-left: 3rem;
    }
`

export const CategoryLi = styled.li`
    display : flex;
    justify-content: center;
    align-items: center;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    padding-right : 2rem;
    @media (min-width : 480px){
        padding-right:1rem;
    }

    @media (min-width:767px){
        
    
    }
    @media (min-width: 1024px){
       
    }
    img{
        padding-right: 0.5rem;
        padding-top: 1rem;
        width: 1.5rem;
        height : 1.5rem;
        @media (min-width : 480px){
           width : 1.8rem;
           height : 1.8rem;
        }
    
        @media (min-width:767px){
            width: 2.4rem;
            height : 2.4rem;
            
       
        }
        @media (min-width: 1024px){
            padding-right: 1rem;
            padding-top: 1rem;
            width: 3rem;
            height : 3rem;
        }
    }
    & > span{
        padding: 1rem 0.5rem 0 0;
        font-size: 0.5rem;
        color : #848484;
        @media (min-width : 480px){
            font-size : 0.8rem;
            
        }
    
        @media (min-width:767px){
            font-size : 1rem;
        }
        @media (min-width: 1024px){
            padding-top: 1rem;
            font-size: 1.1rem;
            width : 3rem;
       
        }
    }
`