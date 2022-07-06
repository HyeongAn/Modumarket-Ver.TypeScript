import styled from "styled-components";

interface styledProps{
    background? : string;
    image? : string;
} ;

export const Section = styled.section`
    width: 100vw;
`

export const SectionWrap = styled.div`
    display : flex;
    justify-content: center;
`

export const Wrap = styled.div`
    width : 100%;
    display : flex;
    justify-content:center;
    padding : 2rem 0 2rem 0;
    @media (min-width : 767px){
        
        
    }
    @media (min-width: 1024px){
        width : 100%;
        display : flex;
        justify-content:center;
        padding : 5rem 0 3rem 0;
    
    }
`

export const TitleWrap = styled.div`
    display:flex;
    padding-top: 2rem;
    justify-content : space-between;
    width: 80%;
    border-bottom: 1.5px solid #848484;
    border-radius: 1px;

`

export const Title = styled.div`
    margin: 0;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;

    & > h2 {
       
        font-size : 1.5rem;
        line-height:2.2rem;
        font-weight : 700;
        margin: 0;
        padding-bottom: 0.5rem;
        @media (min-width : 480px){
            font-size : 1.8rem;
            line-height:2.2rem;
            font-weight : 700;

        }
        @media (min-width : 767px){
            font-size : 2.2rem;
            line-height:2.2rem;
            font-weight : 700;
            
        }
        @media (min-width: 1024px){
            font-size : 3rem;
            margin: 0;
            padding-bottom: 0.5rem;
            font-weight : 700;
        }
    }
`

export const ButtonWrap = styled.div`
    display:flex;
    align-items: center;
`
export const Button = styled.div`
    padding-left : 1rem;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    
`
export const HeadButton = styled.div<styledProps>`

    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => 
        props.background === "#FF6767" ? "#FF6767" : "white"   
    };
    font-size: 1rem;
    font-weight : 600;
    padding-top: 0.2rem;
    cursor: pointer;
    width  :6rem;
    border-radius: 4px;
    border: ${(props) => 
        props.background === "#FF6767" ? 0 : "thin"
    };
    border-color : ${(props) => 
        props.background === "#FF6767" ? "white" : "#848484"
    };
    color: ${ (props) =>
        props.background === "#FF6767" ? "white" : "#848484"
    };
    height : 2rem;
    border-style : solid;
`

export const DetailWrap = styled.div`
    display : flex;
    width : 80%;
    justify-content : center;
    flex-wrap: wrap;

`

export const DetailPhoto = styled.div<styledProps>`
    img {
        width : ${(props) => 
            (props.image === "" ? "17.145rem" : "22rem")};
        height : ${(props) => 
            (props.image === "" ? "15rem" : "13rem")};
        
        @media (min-width : 480px){
            width : ${(props) => 
                (props.image === "" ? "21.717rem" : "27.1rem")};
            height : ${(props) => 
                (props.image === "" ? "19rem" : "16rem")};    

        }
        @media (min-width : 767px){
            width : ${(props) => 
                (props.image === "" ? "26.289rem" : "32.18rem")};
            height : ${(props) => 
                (props.image === "" ? "23rem" : "19rem")};  
            
        }
        @media (min-width: 1024px){
            width : ${(props) => 
                (props.image === "" ? "32rem" : "40rem")};
            height : ${(props) => 
                (props.image === "" ? "28rem" : "24.6rem")};
        
        }
    }
`

export const Detail = styled.div`
    padding : 2rem 2rem 2rem 2rem;
    
    @media (min-width : 480px){
        padding : 2rem 0;

    }
    @media (min-width : 767px){
        padding : 3rem;
        display:flex;
        flex-direction: row;
        
    }
    @media (min-width: 1024px){
        padding : 4rem 2.5rem 0 5.5rem;
        display:flex;
        flex-direction: column;
    }
`

export const DetailDivider = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    @media (min-width : 480px){
        

    }
    @media (min-width : 767px){
        padding : 0 2rem;
        
    }
    @media (min-width: 1024px){
        
    
    }
`

export const DetailCategory = styled.div`
    display : flex;
    align-items : center;
    padding-bottom: 1.2rem;
    @media (min-width : 480px){
        padding-bottom: 1.5rem;

    }
    @media (min-width : 767px){
        padding-bottom: 1.8rem;
        
    }
    @media (min-width: 1024px){
        padding-bottom: 2rem;
    
    }
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    img{
        width: 2.2rem;
        height : 2.2rem;
    }
    & > span{
        font-weight: 700;
        padding: 0 0.8rem;
    }
`

export const DetailMemberAndTimeWrap = styled.div`
    display: flex;
    align-items : center;
    justify-content:space-around;
    border-radius: 31px;
    background-color: #F1F2F2;
    margin-bottom : 1rem;
    width : 19.5rem;
    height : 2.5rem;

    & > span{
        font-weight: 700;
    }
    
`
export const DetailMemberAndTime = styled.div`
    width : 60%;
    display : flex;
    align-items : center;

    img{
        width: 1.8rem;
        height : 1.8rem;
    }
    & > span{
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        padding: 0 0.8rem;
    }
`

export const DetailButtonWrap = styled.div`
    padding-top : 1rem;
    width : 100%;
    display : flex;
    flex-direction: row;
    justify-content : center;
    align-items : center;
    @media (min-width : 480px){
            

    }
    @media (min-width : 767px){
        flex-direction: column;
        padding: 3rem 2rem 0 2rem;;
    }
    @media (min-width: 1024px){
        width : 80%;
        padding : 1rem 2rem 0 2rem;
    
    }
`

export const DetailButton = styled.div`
    display : flex;
    padding: 0.5rem; 
    
`
export const DitailButtonChild = styled.button<styledProps>`
    border : ${(props) => 
        props.background ===  "#FF6767" ? 0 : "thin"
    };
    background-color: ${(props) => 
        props.background === "#FF6767" ? "#FF6767" : "white"
    };
    color: ${(props) => 
        props.background === "#FF6767" ? "white" : "#848484"
    };
    border-color : ${(props) => 
        props.background === "#FF6767" ? "white" : "#848484"
    };
    border-radius : 4px;
    cursor: pointer;
    border-style : solid; 
    width : 9rem;
    height : 2.4rem;
    font-size : 1rem;
    font-weight : 600;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    
    @media (min-width : 480px){
            

    }
    @media (min-width : 767px){
        width : 12rem;
        height : 2.4rem;
        font-size : 1.1rem;
        
    }
    @media (min-width: 1024px){
        width : 15rem;
        height : 2.4rem;
        font-size : 1.1rem;
    }
`