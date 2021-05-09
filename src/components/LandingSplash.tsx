import React from 'react';
import styled from 'styled-components';
import Portrait from './Portrait';
import { SocialIcon } from 'react-social-icons';
import { BsChevronCompactDown } from "react-icons/bs";
import { scroller } from 'react-scroll';

const scrollOptions = {duration: 500, delay: 100, smooth: true }

const SplashContainer = styled.div`
  background: linear-gradient(to left, #F72585, #7209B7);
  height: 100vh;
  width: 100vw;
`

const SplashInfoContainer = styled.div`
    margin-left: 100px;
`

const TitleFont = styled.span`
  font-family: 'Lato', sans-serif;

  font-size: 75px;
  font-weight: 900;
  color: #F4F7F5;
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

const SplashContentContainer = styled.div`
    position: absolute;
    top: 30vh;
    left: 300px;
    display: flex;
    align-items: center;
`

export default function LandingSplash() {
  return (
    <SplashContainer>
      <SplashContentContainer>
      <Portrait />
        <SplashInfoContainer>
            <TitleFont>Hello, I'm Andrew!</TitleFont>
            <IconContainer>
            <ContactIcon url="https://www.linkedin.com/in/andrewydai/" />
            <ContactIcon url="https://github.com/andrewydai" />
            <ContactIcon url="mailto:dai.an@northeastern.edu" network="email"/>
            </IconContainer>
        </SplashInfoContainer>
      </SplashContentContainer>
      <CompassDown onClick={() => scroller.scrollTo('landingExperiences', scrollOptions)}/>
    </SplashContainer>
  );
}