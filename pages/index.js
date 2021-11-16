import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkText from '../components/LinkText';
import { PRIMARY_BACKGROUND, PRIMARY_TEXT_COLOR, PRIMARY_TEXT_COLOR_HOVER } from '../constants/colors';
import splash from '../constants/splash.json';
import photo from '../public/photo.png';
import Slide from '../components/Slide';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const PageContainer = styled.div`
  background-color: ${PRIMARY_BACKGROUND};
  color: ${PRIMARY_TEXT_COLOR};
  font-family: 'poppins', sans-serif;
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
  max-width: 100%;
`;

const SplashContainer = styled.div`
  position: relative;
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
`;

const SecondSplashContainer = styled.div`
  padding: 50px 200px 50px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondSplashParagraphContainer = styled.div`
  width: 60%;
  line-height: 30px;
`;

const SecondSplashParagraphText = styled.div`
  padding-top: 10px;
`;

const SecondSplashLinkContainer = styled.div`
  width: 60%;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  font-size: 20px;
  text-decoration: underline;
`;

const TitleText = styled.div`
  color: ${PRIMARY_TEXT_COLOR};
  position: absolute;
  bottom: 300px;
  left: 100px;
  font-size: 70px;
  font-weight: 700;
  font-family: 'poppins', sans-serif;
`;

const ScrollText = styled.span`
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PageContainer>
        <Slide>
          <SplashContainer>
            <Header />
            <TitleText>
              Hi! I&apos;m Andrew Dai,
              <div>a software engineer.</div>
              <div>
                <ScrollText>Scroll to learn more</ScrollText>
              </div>
            </TitleText>
            <Photo src={photo.src} alt="photo" />
          </SplashContainer>
        </Slide>
        <Slide>
          <SecondSplashContainer name="secondSplash">
            <SecondSplashParagraphContainer>
              <SecondSplashParagraphText>{splash.introText1}</SecondSplashParagraphText>
              <SecondSplashParagraphText>{splash.introText2}</SecondSplashParagraphText>
              <SecondSplashParagraphText>{splash.introText3}</SecondSplashParagraphText>
            </SecondSplashParagraphContainer>
            <SecondSplashLinkContainer>
              <LinkText href="/experiences" primaryColor={PRIMARY_TEXT_COLOR} hoverColor={PRIMARY_TEXT_COLOR_HOVER}>
                <div>View my work experiences</div>
              </LinkText>
              <LinkText href="/projects" primaryColor={PRIMARY_TEXT_COLOR} hoverColor={PRIMARY_TEXT_COLOR_HOVER}>
                <div>See my projects</div>
              </LinkText>
              <LinkText href="/about" primaryColor={PRIMARY_TEXT_COLOR} hoverColor={PRIMARY_TEXT_COLOR_HOVER}>
                <div>Learn about me</div>
              </LinkText>
            </SecondSplashLinkContainer>
          </SecondSplashContainer>
        </Slide>
        <Footer name="footer" />
      </PageContainer>
    </>
  );
}
