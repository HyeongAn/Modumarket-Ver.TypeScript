import styled from 'styled-components'


export const Section = styled.section`
    width : 100vw;
    height : 15rem;
    background-color: #F1F2F2;
    @media (min-width : 480px){
        height : 18rem;

    }
    @media (min-width : 767px){
        height : 19.5rem;
            
    }
    @media (min-width: 1024px){
        height: 21rem;
    }
`

export const Wrap = styled.div`
    display: flex;
    padding-top: 2rem;
    justify-content: center;
    width : 100%;
    margin-top: 2rem;
    @media (min-width: 1024px){
        padding-top: 3rem;
        margin-top: 4rem;
    }
`

export const ContentWrap = styled.div`
    width : 75%;
` 

export const UserWrap = styled.div`
    display : flex;
    align-items : center;
`

export const UserPhotoWrap = styled.div`
    img{
        width : 3.5rem;
        height :3.5rem;
        border-radius: 70%;
        border: 0.5px solid #858585;
        @media (min-width : 480px){
            width : 4rem;
            height : 4rem;

        }
        @media (min-width : 767px){
            width : 4.5rem;
            height : 4.5rem;
            
        }
        @media (min-width: 1024px){
            width : 5rem;
            height : 5rem;
        }
    }
`

export const UserNameWrap = styled.div`
    padding: 1rem;
    font-size: 1.2rem;
    font-weight : 700;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    @media (min-width : 480px){
        font-size: 1.3rem;
    }
    @media (min-width : 767px){
        font-size: 1.4rem;
    }
    @media (min-width: 1024px){
        font-size: 1.5rem;
    }
`

export const UserContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    & > p{
        font-size: 1rem;
        padding: 0.8rem 0;
        overflow: hidden;
        height : 4.8rem;
        margin: 0;
        line-height:1.3rem;
        @media (min-width : 480px){
            font-size: 1.1rem;
            line-height:1.4rem;

        }
        @media (min-width: 1024px){
            font-size: 1.2rem;
            line-height:1.6rem;
        }
    }
    
`
