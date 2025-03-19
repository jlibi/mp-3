// import { Link } from 'react-router-dom'
import NavLink from "./NavLink.tsx"
import styled from "styled-components";

const NavContainer = styled.nav`
    width: 25%;
    height: 100vh; //Same height for all pages

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto; 
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #35383b;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    height: 100%; // length of Nav
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        height: auto;
    }
`;

export default function Nav() {
    return(
        <NavContainer>
            <NavList>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/competencies">Competencies</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </NavList>
        </NavContainer>
    );
}