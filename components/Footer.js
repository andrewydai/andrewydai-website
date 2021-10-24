import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin, SiGmail, SiJavascript, SiReact, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';
import { AiFillFilePdf } from 'react-icons/ai';
import { PRIMARY_TEXT_COLOR } from '../constants/colors';
import Slide from './Slide';

const FooterContainer = styled.div`
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

const iconSizer = (icon) => {
  const ResizedIcon = styled(icon)`
    width: ${(props) => props.iconWidth}px;
    height: ${(props) => props.iconHeight}px;
    margin-left: ${(props) => props.iconWidth / 2}px;
    margin-right: ${(props) => props.iconWidth / 2}px;
    color: ${PRIMARY_TEXT_COLOR};
  `;

  return ({ iconHeight, iconWidth }) => <ResizedIcon iconHeight={iconHeight} iconWidth={iconWidth} />;
};

const Github = iconSizer(SiGithub);
const Linkedin = iconSizer(SiLinkedin);
const Gmail = iconSizer(SiGmail);
const Resume = iconSizer(AiFillFilePdf);
const JavaScriptIcon = iconSizer(SiJavascript);
const ReactIcon = iconSizer(SiReact);
const Nextjs = iconSizer(SiNextdotjs);
const StyledComponents = iconSizer(SiStyledcomponents);

const BIG_ICON_SIZE = 100;
const LITTLE_ICON_SIZE = 25;

export default function Footer() {
  return (
    <Slide>
      <FooterContainer>
        <div>
          <a href="https://github.com/andrewydai" target="_blank">
            <Github iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="http://linkedin.com/in/andrewydai" target="_blank">
            <Linkedin iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="mailto:andreweyushengdai@gmail.com" target="_blank">
            <Gmail iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
          <a href="http://linkedin.com/in/andrewydai" target="_blank">
            <Resume iconWidth={BIG_ICON_SIZE} iconHeight={BIG_ICON_SIZE} />
          </a>
        </div>
        <NameFont>Contact me!</NameFont>
        <WebiteInfoContainer>
          <WebsiteText>Website built with:</WebsiteText>
          <div>
            <JavaScriptIcon iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <ReactIcon iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <Nextjs iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
            <StyledComponents iconWidth={LITTLE_ICON_SIZE} iconHeight={LITTLE_ICON_SIZE} />
          </div>
        </WebiteInfoContainer>
      </FooterContainer>
    </Slide>
  );
}
