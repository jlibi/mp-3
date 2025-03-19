import styled from "styled-components";
import {MainContainer, MainContent, MainTitle, MainText} from "../containers/Styles.tsx";

const SubHeading1 = styled.h3`
    font-size: calc(1px + 1.04vw);
    padding-top: 10px;
`;

const SubHeading2 = styled.h4`
    font-size: calc(1px + .97vw);
    font-weight: bold;
`;

const SubHeading3 = styled.h5`
    font-size: calc(1px + .97vw);
    font-style: italic;
`;

export default function Education() {
    return(
        <MainContainer>
            <MainTitle>Education</MainTitle>
            <MainContent>
                <MainText>
                    <hr style={{margin: "4vh 0vw"}} />
                    <SubHeading1>EDUCATION AND PROFESSIONAL DEVELOPMENT</SubHeading1>
                    <SubHeading2>Web Developer, Nanodegree</SubHeading2>
                    <SubHeading3>Udacity | 2017-2019</SubHeading3>

                    <ul>
                        <li>Created structures of website using semantic HTML. Styled websites using CSS and responsive design.</li>
                        <li>Developed accessibly web applications.</li>
                        <li>Built professional applications with object-oriented JavaScript techniques.</li>
                    </ul>

                    <SubHeading2>Certificate in Interactive Design</SubHeading2>
                    <SubHeading3>Rhode Island School of Design | 2015-2017</SubHeading3>

                    <ul>
                        <li>Created structures of website using semantic HTML. Styled websites using CSS and responsive design.</li>
                        <li>Designed graphic content and user interfaces with Wix, and Squarespace.</li>
                        <li>Developed conceptual and visual designs for site and company themes.</li>
                        <li>Redesigned corporate websites and created concept mock-ups for web and mobile applications.</li>
                        <li>Translated wireframes into web templates and graphics for use in content management systems.</li>
                        <li>Created web interface designs. Developed and executed design and layout solutions for logos, business cards,
                            flyers, brochures, and menus using Photoshop, Illustrator, and InDesign.</li>
                    </ul>

                    <SubHeading2>Master of Arts, Digital Media</SubHeading2>
                    <SubHeading3>Northeastern University, Boston, MA | 2012</SubHeading3>

                    <SubHeading2>Bachelor of Arts, Visual Communication Design</SubHeading2>
                    <SubHeading3>Suandusit University, Bangkok, Thailand | 2006</SubHeading3>

                </MainText>
            </MainContent>
        </MainContainer>
    );
}