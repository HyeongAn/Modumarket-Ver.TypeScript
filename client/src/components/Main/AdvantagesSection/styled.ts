import styled from 'styled-components';

export const Section = styled.section`
    padding: 1rem 0;
    width: 100vw;
    background-color: #fff;
    @media (min-width : 480px){
       padding : 2rem 0;
    }
    @media (min-width : 767px){
       padding : 3rem 0;
    }
 
    @media (min-width: 1024px){
        padding: 4rem 0;  
    
    }

`
export const SectionWrap = styled.div`
    width : 100%;
    padding: 2rem 0;
`

export const CardWrap = styled.div`
    width :100%;
    display: flex;
    justify-content: center;
    
`

export const Card = styled.div`
    display: flex;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 8rem;
    height : 9rem;
    margin: 0 0.5rem ;
    justify-content: center;
    align-items : center;

    @media (min-width : 480px){
        width: 11rem;
        height : 12rem;
        margin: 0 0.5rem ;
    }
    
    @media (min-width:767px){
        width: 14rem;
        height : 15rem;
        margin: 0 0.8rem ;
       
    }
    @media (min-width: 1024px){
        width: 16rem;
        height : 18rem;
        margin: 0 1rem ;
       
    }
    
`

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    width : 100%;
    padding: 0 0.2em;
    @media (min-width : 480px){
        padding : 0 0.4rem;
    }
    
    @media (min-width:767px){
        padding : 0 0.6rem;
    
    }
    @media (min-width: 1024px){
        padding: 0 1rem;
    
    }
`

export const ContentPhotoLaptop = styled.div`
    
    img{
        width : 3.9rem;
        height : 2.2rem;
        @media (min-width : 480px){
            width : 6.7rem;
            height : 3.2rem;
        }
        
        @media (min-width:767px){
            width : 8.7rem;
            height : 4.3rem;
        
        }
        @media (min-width: 1024px){
            width : 10.69rem;
            height : 5.4rem;
        
        }
    }
`
export const ContentPhotoLocationMark = styled.div`

    img{
        width : 1.4rem;
        height : 2.1rem;
        @media (min-width : 480px){
            width : 2.0rem;
            height : 3.4rem; 
        }
        
        @media (min-width:767px){
            width : 2.7rem; 
            height: 4.3rem;
        
        }
        @media (min-width: 1024px){
            width : 3.4rem;
            height : 5.3rem;
        
        }
    }
`
export const ContentPhotoCoin = styled.div`

    img{
        width : 2.8rem;
        height : 2.1rem;
        @media (min-width : 480px){
            width : 3.9rem;
            height : 3.5rem;
        }
        
        @media (min-width:767px){
            width : 4.9rem;
            height : 4.5rem;
        
        }
        @media (min-width: 1024px){
            width : 6rem;
            height : 5.3rem;
        
        }
    }
`

export const ContentText = styled.div`
    width : 100%;
    padding : 0.5rem 0;
    text-align: center;
    font-size: 0.6rem;
    line-height: 0.8rem;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    @media (min-width : 480px){
        padding : 1rem 0;
        font-size: 0.8rem;
        line-height: 1rem;
    }
    
    @media (min-width:767px){
        padding : 1rem 0;
        font-size: 1rem;
        line-height: 1.2rem;
    
    }
    @media (min-width: 1024px){
        padding : 1rem 0;
        font-size: 1.1rem;
        line-height: 1.4rem;
    }

    & > h3 {
        line-height: 1rem;
        font-size:0.75rem;
        font-weight : 700;
        padding-bottom: 0.3rem;
        @media (min-width : 480px){
            padding-bottom: 0.3rem;
            font-size: 0.9rem;
        }
        
        @media (min-width:767px){
            padding-bottom: 0.7rem;
            font-size: 1.1rem;
        }
        @media (min-width: 1024px){
            padding-bottom: 1rem;
            font-size : 1.2rem;
        }
    }
    
`