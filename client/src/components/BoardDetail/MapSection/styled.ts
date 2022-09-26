import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  min-width: 520px;
  height: 70%;
`;

export const Wrap = styled.div`
  padding: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapWrap = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  @media (min-width: 1024px) {
    width: 75%;
  }
`;

export const MapPhoto = styled.div`
  img {
    width: 2rem;
    height: 2rem;
    @media (min-width: 767px) {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media (min-width: 1024px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const MapTitle = styled.div`
  padding-left: 0.5rem;
  & > span {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    @media (min-width: 767px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

export const Map = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  height: 15rem;
  @media (min-width: 767px) {
    height: 20rem;
  }
  @media (min-width: 1024px) {
    width: 75%;
    height: 25rem;
  }
`;
