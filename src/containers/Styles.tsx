import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Raleway", Arial, "Helvetica Neue", Helvetica, sans-serif;
        background-color: #a0a2a4;
    }
`;

export const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #f0f4f8;
  height: 100vh;
  //overflow: scroll;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;  
    height: auto;
    min-height: 100vh;
  }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 75%;
    background-color: #f0f4f8;
    margin: 0 auto;
    padding: 2vh 2vw;
    text-align: center;
    overflow-y: auto;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: none;
        overflow-y: visible;
    }
`;

export const MainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #385044;

    @media screen and (max-width: 768px) {
        text-align: center;
        color: #385044;
        font-size: calc(2px + 3vw);
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2vh 2vw;
    
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const MainText = styled.div`
    text-align: center;
    width: 60%;
    margin: 0 auto;
    
    ul {
        display: inline-block;
        text-align: left;
        padding: 0;
        //background-color: rgba(166, 210, 178, 0.45);
    }

    @media screen and (max-width: 768px) {
        align-self: center;
        width: 90%;
        margin: 1vh 1vw;
    }
`;
