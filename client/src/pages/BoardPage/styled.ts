import styled, { keyframes } from "styled-components";
import Arrow from "../../assets/arrow.png";

export const Section = styled.section`
  width: 100vw;
  min-width: 520px;
  padding: 4rem 0 0 0;

  @media (min-width: 1024px) {
    padding: 8rem 0 0 0;
  }
`;

export const Wrap = styled.div`
  width: 100vw;
`;

export const TitleWrap = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  justify-content: center;
  padding-bottom: 4rem;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    padding-bottom: 8rem;
  }
`;

export const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SearchTab = styled.input`
  width: 13rem;
  height: 1.5rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  border: 1.5px solid #dfdfdf;
  border-radius: 4px;
  padding: 0.2rem 0 0 1rem;
  @media (min-width: 480px) {
    width: 18rem;
    height: 1.7rem;
  }
  @media (min-width: 767px) {
    width: 26rem;
    height: 1.8rem;
  }

  @media (min-width: 1024px) {
    width: 26rem;
    height: 2rem;
    margin: 0 0.5rem;
    font-size: 1rem;
    padding: 0.2rem 0 0 1rem;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 3rem;
  height: 1.9rem;
  margin: 0 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: #dfdfdf;
  border-radius: 4px;
  border: none;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  @media (min-width: 480px) {
    width: 4rem;
    height: 2.2rem;
    font-size: 1rem;
  }
  @media (min-width: 767px) {
    width: 6rem;
    height: 2.2rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    width: 6rem;
    height: 2.4rem;
    margin: 0 0.5rem;
    font-size: 1rem;
  }
`;

export const SearchCategory = styled.select`
  width: 4rem;
  height: 1.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1.5px solid #dfdfdf;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  padding: 0 0.5rem 0 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${Arrow}) no-repeat 90% 50%;
  background-size: auto 15%;
  @media (min-width: 480px) {
    width: 6rem;
    height: 2.2rem;
    font-size: 1rem;
    background-size: auto 20%;
  }
  @media (min-width: 767px) {
    width: 7rem;
    height: 2.2rem;
    font-size: 1rem;
    background-size: auto 20%;
  }

  @media (min-width: 1024px) {
    width: 7rem;
    height: 2.4rem;
    font-size: 1rem;
    background-size: auto 20%;
  }

  & > option {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    font-family: "Open Sans", sans-serif;
  }
`;

export const ReservationButtonWrap = styled.div`
  display: flex;
  padding: 1rem 1.8rem 1rem 0;
  flex-direction: row-reverse;
  @media (min-width: 480px) {
    padding: 2rem 2rem 2rem 0;
  }
  @media (min-width: 767px) {
    padding: 3rem 2rem 3rem 0;
  }

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

export const ReservationButton = styled.button`
  width: 5.2rem;
  height: 1.8rem;
  border: 1.5px solid #dfdfdf;
  border-radius: 4px;
  background-color: #ffff;
  font-size: 0.7rem;
  font-weight: 400;
  cursor: pointer;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  @media (min-width: 480px) {
    width: 6rem;
    height: 1.9rem;
    font-size: 0.8rem;
  }
  @media (min-width: 767px) {
    width: 6.8rem;
    height: 2rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    width: 7.9rem;
    height: 2.2rem;
    font-size: 0.9rem;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const RegisterNotYet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 1.3rem;
    font-weight: 700;
    padding-bottom: 2rem;
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    font-family: "Open Sans", sans-serif;
  }
`;
export const RegisterNotYetPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const floatingAnimation = keyframes`
    0% {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h1 {
    font-size: 3.75rem;
    font-weight: 900;
    margin: 0;
  }
  & > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    margin-top: 0.8rem;
  }

  img {
    width: 20rem;
    height: 20rem;
    animation: ${floatingAnimation} 2s infinite;
  }
`;
