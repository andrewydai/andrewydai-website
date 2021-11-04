import React from 'react';
import styled from 'styled-components';
import { PRIMARY_TEXT_COLOR } from '../constants/colors';
import Slide from './Slide';

const WindowContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 100vh;
  width: 100vw;
  color: ${PRIMARY_TEXT_COLOR};
  font-family: 'poppins', sans-serif;
`;

const ProjectTitle = styled.div`
  position: absolute;
  height: 100vh;
  left: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 80px;
  font-weight: 700;
`;

const ProjectRole = styled.div`
  font-size: 20px;
`;

const ProjectDescription = styled.div`
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

const ProjectTime = styled.div`
  font-style: italic;
  font-size: 15px;
`;

const ProjectLinks = styled.div`
  display: flex;
`;

const ProjectLink = styled.div`
  color: ${PRIMARY_TEXT_COLOR};
  text-decoration: underline;
  font-style: italic;
  margin: 10px 20px 0px 0px;
`;

export default function ProjectSlide({ project }) {
  const { title, role, time, description, links } = project;
  return (
    <Slide>
      <WindowContainer>
        <ProjectTitle>
          {title}
          <ProjectRole>
            {role}
            <ProjectTime>{time}</ProjectTime>
          </ProjectRole>
        </ProjectTitle>
        <ProjectDescription>
          {description}
          <ProjectLinks>
            {links.map((link) => (
              <a key={link.linkUrl} href={link.linkUrl} target="_blank" rel="noopener noreferrer">
                <ProjectLink key={link.linkTitle}>{link.linkTitle}</ProjectLink>
              </a>
            ))}
          </ProjectLinks>
        </ProjectDescription>
      </WindowContainer>
    </Slide>
  );
}
