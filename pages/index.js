import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PRIMARY_BACKGROUND, PRIMARY_TEXT_COLOR } from '../constants/colors';
import photo from '../public/photo.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const PageContainer = styled.div`
  background-color: ${PRIMARY_BACKGROUND};
`;

const WindowContainer = styled.div`
position: relative
  width: 100vw;
  height: 100vh;
`;

const TitleText = styled.div`
  color: ${PRIMARY_TEXT_COLOR};
  position: absolute;
  bottom: 300px;
  left: 100px;
  font-size: 70px;
  font-family: 'poppins', sans-serif;
`;

const WorkExperienceText = styled.span`
  text-decoration: underline;
  margin-top: 10px;
  margin-right: 20px;
  justify-content: space-between;
  font-size: 20px;
`;

const Photo = styled.img`
  transform: scaleX(-1);
  width: 35vw;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <PageContainer>
        <WindowContainer>
          <Header />
          <TitleText>
            Hi! I'm Andrew Dai,
            <br /> a software engineer.
            <div>
              <WorkExperienceText>View my work experience</WorkExperienceText>
              <WorkExperienceText>Learn about me</WorkExperienceText>
            </div>
          </TitleText>
          <Photo src={photo.src} alt="photo" />
        </WindowContainer>
        <WindowContainer></WindowContainer>
        <Footer />
      </PageContainer>
    </>
  );
}
