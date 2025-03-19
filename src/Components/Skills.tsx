import styled from "styled-components";
import {MainContainer, MainContent, MainTitle, MainText} from "../containers/Styles.tsx";

const SubHeading = styled.h3`
    //margin-top: 5.4vh;
    font-size: calc(1px + 1.04vw);
`;

export default function Skills() {
    return(
        <MainContainer>
            <MainTitle>Skills</MainTitle>
            <MainContent>
                <MainText>
                    <hr style={{margin: "4vh 0vw"}} />
                    <SubHeading>TECHNICAL SKILLS</SubHeading>
                    <ul style = {{backgroundColor: "rgba(166, 210, 178, 0.45)"}}>
                        <li>Adobe Photoshop, Illustrator and InDesign</li>
                        <li>Wix and Squarespace</li>
                        <li>UI/UX Wireframing and Prototyping (OmniGraffle, Balsamiq
                            Mockups, InVision)</li>
                        <li>Video Editing (Final Cut Pro)</li>
                        <li>Git, Github</li>
                        <li>HTML, CSS</li>
                    </ul>
                </MainText>
            </MainContent>
        </MainContainer>
    );
}