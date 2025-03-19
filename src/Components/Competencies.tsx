import styled from "styled-components";
import {MainContainer, MainContent, MainTitle, MainText} from "../containers/Styles.tsx";

const SubHeading = styled.h3`
    font-size: calc(1px + 1.04vw);
`;

export default function Competencies() {
    return(
        <MainContainer>
            <MainTitle>Competencies</MainTitle>
            <MainContent>
                <MainText>
                    <hr style={{margin: "4vh 0vw"}} />
                    <SubHeading>CORE COMPETENCIES</SubHeading>
                        <ul style = {{backgroundColor: "rgb(204, 125, 98)"}}>
                            <li>Front-End Web Development</li>
                            <li>Web, Graphic, and Print Design</li>
                            <li>User Interface Design</li>
                            <li>Visual Design</li>
                            <li>Photo, Color, and Graphic Optimization</li>
                            <li>Wireframes and Mockups</li>
                            <li>Troubleshooting and Problem Solving</li>
                        </ul>
                </MainText>
            </MainContent>
        </MainContainer>
    );
}