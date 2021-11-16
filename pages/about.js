import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { PRIMARY_BACKGROUND, PRIMARY_TEXT_COLOR } from '../constants/colors';
import aboutText from '../constants/about.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundChildhood from '../public/backgroundChildhood.jpeg';
import backgroundFamily from '../public/backgroundFamily.jpeg';
import backgroundHobbies from '../public/backgroundHobbies.jpeg';
import backgroundAdulthood from '../public/backgroundAdulthood.jpeg';

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
  font-family: 'poppins', sans-serif;
`;

const BackgroundContainer = styled.div`
  padding: 50px 100px 100px 100px;
  display: flex;
  justify-content: space-between;
`;

const BackgroundTitle = styled.div`
  padding: 100px 0px 0px 100px;
  font-weight: 700;
  font-size: 30px;
`;

const BackgroundText = styled.div`
  font-size: 20px;
  line-height: 40px;
  width: 40vw;
`;

const Photo = styled.img`
  max-width: 40vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  align-self: center;
`;

const PhotoSubtitle = styled.div`
  font-style: italic;
  font-size: 15px;
`;

export default function About() {
  return (
    <FullPageContainer>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Poppins:wght@900&family=Poppins:wght@700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <WindowContainer>
        <Header />
        <TitleText>
          ABOUT ME
          <FrontSubtitle>Who exactly am I? Scroll down to learn more about me!</FrontSubtitle>
        </TitleText>
      </WindowContainer>
      <WindowContainer>
        <BackgroundTitle>Where am I From?</BackgroundTitle>
        <BackgroundContainer>
          <BackgroundText>{aboutText.backgroundChildhood}</BackgroundText>
          <div>
            <Photo src={backgroundChildhood.src} alt="photo" />
            <PhotoSubtitle>A photo I took on a bike ride in Tennessee</PhotoSubtitle>
          </div>
        </BackgroundContainer>
      </WindowContainer>
      <WindowContainer>
        <BackgroundTitle>Who is My Family?</BackgroundTitle>
        <BackgroundContainer>
          <BackgroundText>{aboutText.backgroundFamily}</BackgroundText>
          <div>
            <Photo src={backgroundFamily.src} alt="photo" />
            <PhotoSubtitle>My cat Kaiser taking a midday nap</PhotoSubtitle>
          </div>
        </BackgroundContainer>
      </WindowContainer>
      <WindowContainer>
        <BackgroundTitle>What are My Passions?</BackgroundTitle>
        <BackgroundContainer>
          <BackgroundText>{aboutText.backgroundHobbies}</BackgroundText>
          <div>
            <Photo src={backgroundHobbies.src} alt="photo" />
            <PhotoSubtitle>Some friends and I learning to make saurkraut soup in Budapest</PhotoSubtitle>
          </div>
        </BackgroundContainer>
      </WindowContainer>
      <WindowContainer>
        <BackgroundTitle>What am I Doing Now?</BackgroundTitle>
        <BackgroundContainer>
          <BackgroundText>{aboutText.backgroundAdulthood}</BackgroundText>
          <div>
            <Photo src={backgroundAdulthood.src} alt="photo" />
            <PhotoSubtitle>A sunset photo at Cape Cod</PhotoSubtitle>
          </div>
        </BackgroundContainer>
      </WindowContainer>
      <Footer />
    </FullPageContainer>
  );
}
