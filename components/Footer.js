import React from 'react';
import styled from 'styled-components';
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiNetlify,
} from 'react-icons/si';
import { AiFillFilePdf } from 'react-icons/ai';
import { PRIMARY_TEXT_COLOR } from '../constants/colors';
import Slide from './Slide';
import IconSizer from './IconSizer';

const FooterContainer = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${PRIMARY_TEXT_COLOR};
  position: relative;
`;

const NameFont = styled.div`
  font-size: 30px;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
  margin: 20px 0px 30px 0px;
`;

const WebiteInfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WebsiteText = styled.div`
  font-family: 'poppins', sans-serif;
  font-weight: 500;
  margin: 30px 0px 5px 0px;
`;

const BIG_ICON_SIZE = 100;
const LITTLE_ICON_SIZE = 25;

export default function Footer() {
  return (
    <Slide>
      <FooterContainer>
        <div>
          <a href="https://github.com/andrewydai" target="_blank" rel="noopener noreferrer">
            <IconSizer icon={SiGithub} iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="http://linkedin.com/in/andrewydai" target="_blank" rel="noopener noreferrer">
            <IconSizer icon={SiLinkedin} iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="mailto:andreweyushengdai@gmail.com" target="_blank" rel="noopener noreferrer">
            <IconSizer icon={SiGmail} iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="Andrew Dai.pdf" download>
            <IconSizer icon={AiFillFilePdf} iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
        </div>
        <NameFont>Contact me!</NameFont>
        <WebiteInfoContainer>
          <WebsiteText>Website built with:</WebsiteText>
          <div>
            <IconSizer icon={SiJavascript} iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <IconSizer icon={SiReact} iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <IconSizer icon={SiStyledcomponents} iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <IconSizer icon={SiNextdotjs} iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <IconSizer icon={SiNetlify} iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
          </div>
        </WebiteInfoContainer>
      </FooterContainer>
    </Slide>
  );
}
