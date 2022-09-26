import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 1.6rem;

  & > span {
    text-decoration: none;
    color: black;
    font-weight: 900;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
  @media (min-width: 480px) {
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  @media (min-width: 767px) {
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  min-width: 520px;
  height: 3.5rem;
  position: relative;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  @media (min-width: 480px) {
    width: 100%;
  }

  @media (min-width: 767px) {
    width: 100%;
    height: 3.5rem;
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding: 0 0;
  }
`;
export const NavBoard = styled.div`
  display: flex;
  width: 4rem;
  flex-direction: row;
  font-size: 0.7rem;
  font-weight: bold;
  font-size: 0.8rem;
  @media (min-width: 480px) {
  }

  @media (min-width: 767px) {
  }
  @media (min-width: 1024px) {
    width: 11.875rem;
  }
  & > span {
    padding: 0.7rem;
    width: 4rem;
  }
  @media (min-width: 480px) {
    font-size: 0.9rem;
    width: 5rem;
  }

  @media (min-width: 767px) {
    font-size: 1rem;
    width: 11.875rem;
  }
  @media (min-width: 1024px) {
    width: 11.875rem;
  }
`;
export const NavButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const NavButton = styled.button`
  flex-shrink: 0;
  justify-content: center;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.4;
  color: #858585;
  background: #fff;
  //border-radius: 4px;
  border: none;
  //1px solid #ADADAD;
  transition: all 0.3s;
  height: 1.5rem;
  width: 2.5rem;
  margin-right: 0.5rem;
  font-size: 0.4rem;
  &:hover {
    color: #fff;
    transition: all 0.3s;
    background-color: #adadad;
  }
  @media (min-width: 480px) {
    height: 2rem;
    width: 3.5rem;
    font-size: 0.75rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 767px) {
    height: 2rem;
    width: 4.8rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    height: 2.5rem;
    width: 7rem;
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;
