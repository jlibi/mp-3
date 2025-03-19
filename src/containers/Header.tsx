import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #484646;
    color: #cc7d62;
    font-size: calc(1px + .5vw);
    align-items: self-start;
    
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: calc(2px + 1vw);
        padding: 1vh 2vw;
        align-items: center;
    }
`;


export default function Header(){
    return(
        <HeaderContainer>
            <h1>Sudtida's Resume</h1>
        </HeaderContainer>
    );

}