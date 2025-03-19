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

export default function Experience() {
    return(
        <MainContainer>
            <MainTitle>Experience</MainTitle>
            <MainContent>
                <MainText>
                    <hr style={{margin: "4vh 0vw"}} />
                    <SubHeading1>PROFESSIONAL EXPERIENCE</SubHeading1>
                    <SubHeading2>Graphic Artist | A Plus Group</SubHeading2>
                    <SubHeading3>Bangkok, Thailand | 2008–2009</SubHeading3>

                    <ul>
                        <li>Oversaw and managed all layouts for printing ensuring all standards were met.</li>
                        <li>Edited all photographs and ensured they were of the highest quality.</li>
                        <li>Effectively reviewed, edited, and optimized post-printed artwork including posters, brochures, catalogues, CDs, annual
                            reports, posters, calendars, logo designs, billboards, books, and postcards.</li>
                        <li>Improved quality while decreasing time spent preparing artwork to ensure it was delivered in a timely manner.</li>
                    </ul>

                    <SubHeading2>Graphic Artist | Graphite Company</SubHeading2>
                    <SubHeading3>Bangkok, Thailand | 2007–2008</SubHeading3>

                    <ul>
                        <li>Oversaw and managed entire book layouts using design software for formatting purposes.</li>
                        <li>Ensured content was aesthetically pleasing and easy to read by utilizing specialized software to assemble content.</li>
                        <li>Adjusted designs for type size, font style, spacing, column width, and placement to enable users to view pages in actual
                            size of end product.</li>
                    </ul>

                    <SubHeading2>Graphic Artist | Nation Egmont Company, Ltd.</SubHeading2>
                    <SubHeading3>Bangkok, Thailand | 2006–2007</SubHeading3>

                    <ul>
                        <li>Served as the designer and creative illustrator for a children’s magazine.</li>
                        <li>Oversaw all aspects of complete magazine layouts and ensured they were optimized to company standards.</li>
                        <li>Edited magazine features to include a wide variety of Disney characters.</li>
                    </ul>

                </MainText>
            </MainContent>
        </MainContainer>
    );
}