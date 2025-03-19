import {Link, useResolvedPath, useMatch} from "react-router-dom";
import styled from "styled-components";
import * as React from "react";

const StyledListItem = styled.li `
    font-size: calc(2px + 1vw);
    width: 100%;
    padding: 2vh 0;
    margin: 1vh auto;
    box-sizing: border-box;
    border-bottom: 1px solid #a6d2b2;
    
    
    &.active a {
        color: #a6d2b2;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        font-size: calc(2px + 1vw);
        background-color: #35383b;
        border-bottom: none;
        border-right: 1px solid #a6d2b2;
        padding: 1% .5%;
        margin: 1% .5%;

        &:last-child {
            border-right: none;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #c8c9cb;
    
    &:hover {
        color: #a6d2b2;
    }
`

export default function NavLink(props: {to: string; children: React.ReactNode}) {
    const resolvePath = useResolvedPath(props.to);
    const isActive = useMatch({path: resolvePath.pathname, end: true});

    return(
        <StyledListItem className={isActive ? "active" : ""}>
            <StyledLink to={props.to}>
                {props.children}
            </StyledLink>
        </StyledListItem>
    );
}