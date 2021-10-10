import React from 'react';
import styled from 'styled-components';
import { PRIMARY_TEXT_COLOR } from '../constants/colors';

const WindowContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  color: ${PRIMARY_TEXT_COLOR};
  font-family: 'poppins', sans-serif;
`;

const ExperienceTitle = styled.div`
  position: absolute;
  height: 100vh;
  left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 80px;
  font-weight: 700;
`;

const ExperienceRole = styled.div`
  font-size: 20px;
`;

const ExperienceDescription = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  width: 30vw;
  height: 100vh;
  right: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ExperienceTime = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default function ExperienceSlide({ experience }) {
  const { title, role, time, description } = experience;
  return (
    <WindowContainer>
      <ExperienceTitle>
        {title}
        <ExperienceRole>{role}</ExperienceRole>
      </ExperienceTitle>
      <ExperienceTime>{time}</ExperienceTime>
      <ExperienceDescription>{description}</ExperienceDescription>
    </WindowContainer>
  );
}
