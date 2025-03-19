import styled from "styled-components";
import {MainContainer, MainTitle} from "../containers/Styles.tsx";
import { useCalculator } from "../hook/useCalculator";

const SubHeading = styled.h2`
    //margin-top: 5.4vh;
    font-size: calc(9px + 2vw);
`;

const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2vh 2vw;
`;

const ProjectsSection = styled.section`
  width: 60%;
  margin: 0 auto;
  text-align: center;
`;

const ProjectsList = styled.ul`
  display: inline-block;
  text-align: left;
  padding: 0;
  background-color: rgba(166, 210, 178, 0.45);
`;

const CalculatorContainer = styled.div`
  width: 50vw;
  height: auto;
  //background: white;
  //padding: 2vh;
  //border-radius: 1vw;
  //box-shadow: 0 0.5vh 1vh rgba(0, 0, 0, 0.1);
  margin: 4vh 2vw;
  text-align: center;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 0;
`;

const StyledInput = styled.input`
  width: 40vw;
  padding: 1vh;
  font-size: calc(10px + 0.5vw);
  margin: 1vh 0;
  border-radius: 0.5vw;
  border: 1px solid #ccc;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vw;
  margin: 2vh 0;
`;

const OperationButton = styled.button`
  padding: 1vh 2vw;
  font-size: calc(10px + 0.5vw);
  border: none;
  cursor: pointer;
  border-radius: 0.5vw;
  background-color: rgba(166, 210, 178, 0.45);
  
  &:hover {
    opacity: 0.8;
  }
`;

const ClearButton = styled.button`
  background-color: #cc7d62;
  margin-top: 2vh;
  width: 20%;
  padding: 1.5vh;
  font-size: calc(12px + 0.5vw);
  border: none;
  cursor: pointer;
  border-radius: 0.5vw;
  
  &:hover {
    opacity: 0.9;
  }
`;

const OutputText = styled.h3`
  margin-top: 2vh;
  font-size: calc(14px + 1vw);
  font-weight: bold;
`;


export default function Projects() {
    const {
        firstNumber,
        secondNumber,
        output,
        outputColor,
        setFirstNumber,
        setSecondNumber,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearFields
    } = useCalculator();

    return(
        <MainContainer>
            <MainTitle>Projects</MainTitle>
            <ProjectsContent>
                <ProjectsSection id="github-projects">
                    <hr style={{margin: "4vh 0vw"}} />
                    <SubHeading>My GitHub Projects</SubHeading>
                    <ProjectsList>
                        <li><a href="https://github.com/jlibi/CS-665-Class-Project">Project 1</a></li>
                        <li><a href="https://github.com/jlibi/arcade-game">Project 2</a></li>
                    </ProjectsList>
                </ProjectsSection>


                <CalculatorContainer id="calculator">
                    <hr style={{margin: "4vh 10vw"}} />
                    <h4 id="text">Calculator</h4>

                    <InputsContainer className="inputs">
                        <StyledInput
                            type="number"
                            id="first-number"
                            value={firstNumber}
                            onChange={(e) => setFirstNumber(e.target.value)}
                        />
                        <StyledInput
                            type="number"
                            id="second-number"
                            value={secondNumber}
                            onChange={(e) => setSecondNumber(e.target.value)}
                        />
                    </InputsContainer>

                    <ButtonsContainer className="buttons">
                        <OperationButton onClick={addition}>+</OperationButton>
                        <OperationButton onClick={subtraction}>-</OperationButton>
                        <OperationButton onClick={multiplication}>*</OperationButton>
                        <OperationButton onClick={division}>/</OperationButton>
                        <OperationButton onClick={power}>^</OperationButton>
                    </ButtonsContainer>

                    <ClearButton className="clear-btn" onClick={clearFields}>Clear</ClearButton>

                    <OutputText id="output" style={{color: outputColor}}>
                        {output}
                    </OutputText>
                </CalculatorContainer>
            </ProjectsContent>
        </MainContainer>
    );
}