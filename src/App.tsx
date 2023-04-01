import styled from 'styled-components';
import Header from './components/Minimalist/Header';
import { white, magenta, coral } from '../utils/colours';
import { mainFont, headingFont } from '../utils/fonts';
import data from '../data/portfolio-data.json';
import { format } from 'date-fns';
import profilePicture from '../img/profile-picture.png';

const Background = styled.div`
  min-height: 100svh;
  color: ${white};
  font-family: ${mainFont};
  grid-column: 2/3;
  padding: 10px 5rem;

  @media (max-width: 550px) {
    padding: 20px;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: ${headingFont};
  margin: 0;
  color: ${coral};
  text-shadow: 0px 4px 4px ${magenta};
  font-size: 3rem;
`;

const StyledNameSpan = styled.span`
  &:first-child {
    letter-spacing: 0.14em;
  }

  &:last-child {
    letter-spacing: 0.24em;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 20px;
  gap: 25px;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  flex: 0 0 25%;
  position: relative;

  &::before {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    border: 5px solid ${magenta};
    border-radius: 20px;
    content: '';
  }

  translate: -15px 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  flex: 0 0 70%;
  align-self: center;
`;

const Description = styled.div`
  line-height: 22px;
  font-size: 1rem;
`;

const WorkExperience = styled.div`
  margin-top: 3rem;
  border: 2px solid ${coral};
  border-radius: 20px; 
  width: 100%;
  padding: 20px;
`;

const WorkExperienceHeader = styled.span`
  font-family: ${headingFont};
  letter-spacing: -0.07em;
  border-bottom: 5px solid ${magenta};
  display: inline-block;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: ${coral};
`;

const WorkExperienceDetails = styled.div`
  font-size: 1.1rem;
`;

const StyledList = styled.ul`
  list-style-type: "→";

  & li {
    padding-left: 10px;
  }
`;

const Links = styled.a`
  color: ${white};
  transition: 0.5s ease-in-out; 

  &:hover {
    text-decoration: none;
    text-shadow: 3px 3px 4px ${coral}
  }
`;

const App = () => {
  const { firstName, lastName, usefulLinks, workHistory } = data;

  return (
    <Background className="App">
      <Header title="portfolio" year={2023} />
      <Content>
        <Text>
          <StyledH1>
            <StyledNameSpan>{firstName}</StyledNameSpan>
            <StyledNameSpan>{lastName}</StyledNameSpan>
          </StyledH1>
          <Description>
            <p>{"Hello, I'm Jamie. I'm a Frontend Software Engineer."}</p>
            <p>For more information please contact me here:</p>
            {usefulLinks.map((link, key) => {
              return <p key={key}>{link.type}: <Links href={link.type === 'E-Mail' ? `mailto:${String(link.url)}` : link.url}>{link.url}</Links></p>;
            })}
          </Description>
        </Text>
        <ImageContainer>
          <Image src={profilePicture} />
        </ImageContainer>
      </Content>
      <WorkExperience>
        <WorkExperienceHeader>
          Work Experience
        </WorkExperienceHeader>
        {workHistory.map((job, key) => {
          return <WorkExperienceDetails key={key}>
            <strong>{job.company}</strong>
            <StyledList>
              <li>{format(new Date(job.dateStart), 'dd/MM/yyyy')} - {job.dateEnd} :: {job.role}</li>
            </StyledList>
          </WorkExperienceDetails>;
        })}
      </WorkExperience>
    </Background>
  );
};

export default App;
