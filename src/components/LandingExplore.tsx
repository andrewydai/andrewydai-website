import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'
import textData from '../data/text.json'

const exploreData = textData['landing']['explore'];

const LandingExploreContainer = styled.div`
  background: white;
  height: 50vh;
  width: 100%;
  padding-top: 50px;
  padding-left: 10%;
`

const LandingExploreTitle = styled.span`
  font-size: 50px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
`



const LandingExploreParagraph = styled.div`
  padding-top: 30px;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
`

const LandingExploreNav = styled.div`
  text-align: center;
` 

export default function LandingExplore() {
  return (
    <Element name="landingExperiences">
      <LandingExploreContainer >
        <LandingExploreTitle>Experiences</LandingExploreTitle>
        <LandingExploreParagraph>{exploreData['experiences']['paragraph']}</LandingExploreParagraph>
        <LandingExploreNav><Link to="/experiences">Experiences</Link></LandingExploreNav>
      </LandingExploreContainer>
      <LandingExploreContainer >
        <LandingExploreTitle>Projects</LandingExploreTitle>
        <LandingExploreParagraph>{exploreData['projects']['paragraph']}</LandingExploreParagraph>
        <LandingExploreNav><Link to="/experiences">Experiences</Link></LandingExploreNav>
      </LandingExploreContainer>
      <LandingExploreContainer >
        <LandingExploreTitle>About Me</LandingExploreTitle>
        <LandingExploreParagraph>{exploreData['about']['paragraph']}</LandingExploreParagraph>
        <LandingExploreNav><Link to="/experiences">Experiences</Link></LandingExploreNav>
      </LandingExploreContainer>
    </Element>
  );
}