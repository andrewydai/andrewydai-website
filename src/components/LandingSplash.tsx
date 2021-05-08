import React from 'react';
import styled from 'styled-components';
import Portrait from './Portrait';
import { SocialIcon } from 'react-social-icons';
import { BsChevronCompactDown } from "react-icons/bs";
import { scroller } from 'react-scroll';

const scrollOptions = {duration: 500, delay: 100, smooth: true }

const LandingSplashContainer = styled.div`
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  height: 100vh;
  width: 100vw;
`

const LandingSplashInfoContainer = styled.div`
  position: absolute;
  top: 30vh;
  left: 350px;
`

const TitleFont = styled.span`
  font-family: 'Lato', sans-serif;

  font-size: 75px;
  font-weight: 900;
  color: #EFF8E2;
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

const CompassDown = styled(BsChevronCompactDown)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 50%;
    height: 70px;
    &:hover {
        cursor: pointer;
    }
`

export default function LandingSplash() {
  return (
    <LandingSplashContainer>
      <LandingSplashInfoContainer>
        <TitleFont>Hello, I'm Andrew!</TitleFont>
        <IconContainer>
          <ContactIcon url="https://www.linkedin.com/in/andrewydai/" />
          <ContactIcon url="https://github.com/andrewydai" />
          <ContactIcon url="mailto:dai.an@northeastern.edu" network="email"/>
        </IconContainer>
      </LandingSplashInfoContainer>
      <Portrait />
      <CompassDown onClick={() => scroller.scrollTo('landingExperiences', scrollOptions)}/>
    </LandingSplashContainer>
  );
}