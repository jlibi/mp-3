import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #385044;
    color: #d2d1cf;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: calc(2px + .8vw);
    
    @media screen and (max-width: 768px) {
        padding: 1vh 1vw;
        font-size: calc(2px + 1vw);
    }
`;

export default function Footer() {
    return(
        <FooterContainer>
            <p>All Rights Reserved by Sudtida Thumsithi &copy;</p>
        </FooterContainer>
    );
}