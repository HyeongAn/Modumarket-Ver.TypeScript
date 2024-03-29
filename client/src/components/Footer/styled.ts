import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  min-width: 520px;
  background-color: #333b52;
  padding-top: 3rem;
  padding-bottom: 1rem;
  height: auto;
`;
export const LogoContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
  text-align: center;
  color: white;
  img {
    width: auto;
    height: 2rem;
  }
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;
export const TeamContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-evenly;
  color: #ced4da;
  width: 80vw;
  margin-top: 2rem;
  border-top: 2px solid #ced4da;
  img {
    width: 4rem;
    height: 4rem;
  }
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: 600;

  @media (min-width: 767px) {
    width: 629px;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
  min-width: 13.125rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 8.875rem;

  & > p {
    margin: 0;
  }

  & > p span {
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  & > span:last-child {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

export const GithubIcon = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #ced4da;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;
