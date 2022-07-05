import styled from "styled-components"
import { Link } from "react-router-dom";

interface ImageProps {
    image?: string
}

export const Section = styled.section`
    display : flex;
    
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const CardWrap = styled.div`
    display: flex;
    width : 20rem;
    height : 26rem;
    margin: 1rem 0 1rem 0;
    @media (min-width : 480px){
        width : 22rem;
        height : 26rem;
        margin: 1rem 0 1.5rem 0;
    }

    @media (min-width: 1024px){
        width : 24rem;
        height : 30rem;
    }
`

export const Card = styled.div`
    
    cursor: pointer;
    border : none;
    width : 20rem;
    height : 26rem;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media (min-width : 480px){
        width : 22rem;
        height : 26rem;
    }
    @media (min-width: 1024px){
        width : 24rem;
        height : 30rem;
    }
`

export const CardPhoto = styled.div<ImageProps>`
    display : flex;
    justify-content: center;
    /* width : 24rem;
    height : 11.3rem; */
    overflow: hidden;
    & > img{
        width : ${(props) =>
            (props.image === "" ? '13rem' : '24rem')
        };
        height : 9rem;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        @media (min-width : 480px){
            height : 10rem;
        }
        @media (min-width: 1024px){
            height : 11.3rem;
        }
    }
`

export const CardCategoryWrap = styled.div`
    display : flex;
    align-items : center;
    padding : 1rem 0 0.5rem 0;
    width : 100%;
`

export const CardCategoryPhoto = styled.div`
    padding-left: 1.5rem;
    & > img{
        width : 2rem;
        height : 2rem;

        @media (min-width: 1024px){
            width : 2.3rem;
            height : 2.3rem;
        }
    }
`


export const CardCategory = styled.div`
    font-weight: 700;
    font-size: 1rem;
    padding: 0 0.7rem;

    @media (min-width: 1024px){
        font-weight: 700;
        font-size: 1rem;
    }
`


export const CardTitle = styled.div`
    padding: 0 1.5rem 0 1.5rem;
    overflow: hidden;
    & > h3 {
        height: 1.875rem;
        font-size : 1.2rem;
        overflow: hidden;
        margin : 0;
        @media (min-width : 480px){
            font-size : 1.3rem;
        }

        @media (min-width: 1024px){
            height: 1.875rem;
            font-size : 1.5rem;
        }
    }
`


export const CardContent = styled.div`
    padding: 0.7rem 1.5rem 0.2rem 1.5rem;
    overflow: hidden;
    & > p{
        width: 16rem;
        height: 4.625rem;
        margin :0;
        font-size: 0.9rem;
        line-height: 1.1rem;
        @media (min-width : 480px){
            width: 19rem;
            margin :0;
            height: 4.5rem;
            font-size: 0.9rem;
            line-height: 1.2rem;
        }
        @media (min-width: 1024px){
            width: 21rem;
            height: 4.625rem;
        }
    }
`

export const CardLocation = styled.div`

    display : flex;
    align-items : center;
    overflow: hidden;
    padding: 0.7rem 1.5rem 0 1.5rem;
    img{
        width : 1.8rem;
        height : 1.8rem;
      
    }

& > p {
    margin : 0;
    width : 15.5275rem;
    height : 0.8rem;
    padding-left: 0.3rem;
    font-size : 0.9rem;
    font-weight: 600;

}
`
export const IsValid = styled.div`
    display : flex;
    width : 100%;
    flex-direction: row-reverse;
    
    & > p{
        color : #FF6767;
        padding: 0 1.5rem 0 1.5rem;
        font-size : 0.8rem;
        font-weight: 600;
      
    }
`
