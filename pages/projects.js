import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ProjectSlide from '../components/ProjectSlide';
import { PRIMARY_BACKGROUND, PRIMARY_TEXT_COLOR } from '../constants/colors';
import projects from '../constants/projects.json';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const FullPageContainer = styled.div`
  background-color: ${PRIMARY_BACKGROUND};
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
  max-width: 100%;
`;

const TitleText = styled.div`
  color: ${PRIMARY_TEXT_COLOR};
  position: absolute;
  bottom: 400px;
  left: 100px;
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 3px;
  font-family: 'poppins', sans-serif;
`;

const FrontSubtitle = styled.div`
  margin-top: 10px;
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: normal;
`;

const WindowContainer = styled.div`
  position: relative;
  height: 100vh;
  width: calc(100vw - (100vw - 100%));
  scroll-snap-align: start;
  color: ${PRIMARY_TEXT_COLOR};
`;

export default function Projects() {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Poppins:wght@900&family=Poppins:wght@700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <FullPageContainer>
        <WindowContainer>
          <Header />
          <TitleText>
            PROJECTS
            <FrontSubtitle>
              Here are some of the cool projects i&apos;ve worked on for my personal interests. Check them out below!
            </FrontSubtitle>
          </TitleText>
        </WindowContainer>
        {Object.values(projects).map((project) => (
          <ProjectSlide key={project.title} project={project} />
        ))}
        <Footer name="footer" />
      </FullPageContainer>
    </>
  );
}
