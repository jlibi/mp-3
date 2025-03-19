import styled from "styled-components";
import {MainContainer, MainTitle, MainContent, MainText} from "../containers/Styles.tsx"
import profileImage from '../assets/SudtidaT.jpeg';


const Paragraph = styled.p`
    margin: 2px 2vw;
    font-size: calc(4px + 1vw);
    color: #484646;
    
    @media screen and (max-width: 768px) {
        margin: 2% 5%;
        font-size: calc(1px + 2vw);
    }
`;

const ProfileImage = styled.img`
    max-width: 100%;
`;

const  MainImage = styled.div`
    width: 40%;
    margin: 0 auto;
    
    @media screen and (max-width: 768px) {
        margin: 1vh auto;
        max-width: 70%;
    }
`;

export default function Home() {
    return (
        <MainContainer>

            <MainTitle>CAREER PROFILE</MainTitle>

            <MainContent>

                <MainImage>
                    <ProfileImage src={profileImage} alt="Sudtida Thumsithi" />
                </MainImage>

                <MainText style ={{ width: "90%", textAlign: "left" }}>
                    <hr style={{margin: "4vh 10vw"}} />
                    <Paragraph>
                        Versatile web/visual designer offering strong performance in creating and developing websites as
                        well as web, graphic, user interface and visual designs. Holds a Master of Arts in Digital Media.
                        Completed a comprehensive program, at the Rhode Island School of Design, with a certificate in Web
                        and Interactive Design. Experienced in layouts, typography, wireframes, and mockups. An avid learner
                        who quickly masters new and emerging technologies while providing key support at the highest levels
                        of service excellence. Passionate about developing creative websites and designs that substantially
                        increases engagement, exposure, adoption, and revenue.
                    </Paragraph>
                </MainText>
            </MainContent>
        </MainContainer>
    )
}