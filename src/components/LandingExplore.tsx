import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll'

const LandingExperiencesContainer = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
`

export default function LandingExplore() {
  return (
    <Element name="landingExperiences">
      <LandingExperiencesContainer >
      </LandingExperiencesContainer>
    </Element>
  );
}