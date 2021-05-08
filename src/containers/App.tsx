import React from 'react';
import styled from 'styled-components';
import Portrait from '../components/Portrait';
import { SocialIcon } from 'react-social-icons';

const AppContainer = styled.div`
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  height: 100vh;
  width: 100vw;
`

const LandingInfoContainer = styled.div`
  position: absolute;
  top: 30vh;
  left: 350px;
`

const TitleFont = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 75px;
  font-weight: 900;
  color: #E5FFDE;
`
const IconContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 30%;
`

const ContactIcon = styled(SocialIcon)`
  background: white;
  border-radius: 50%;
`

function App() {
  return (
    <AppContainer>
      <LandingInfoContainer>
        <TitleFont>Hello, I'm Andrew!</TitleFont>
        <IconContainer>
          <ContactIcon url="https://www.linkedin.com/in/andrewydai/" />
          <ContactIcon url="https://github.com/andrewydai" />
          <ContactIcon url="mailto:dai.an@northeastern.edu" network="email"/>
        </IconContainer>
      </LandingInfoContainer>
      
      <Portrait />
    </AppContainer>
  );
}

export default App;
