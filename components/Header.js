import styled from 'styled-components';
import { PRIMARY_TEXT_COLOR, PRIMARY_TEXT_COLOR_HOVER } from '../constants/colors';
import LinkText from './LinkText';

const HeaderContainer = styled.div`
  position: absolute;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const HeaderText = styled.div`
  font-size: 15px;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
`;

const RightHeaderGroup = styled.div`
  margin-left: 100px;
`;

const LeftHeaderGroup = styled.div`
  margin-right: 100px;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const rightRoutes = [
  { route: '/experiences', text: 'EXPERIENCES' },
  { route: '/projects', text: 'PROJECTS' },
  { route: '/about', text: 'ABOUT' },
  { route: '/contact', text: 'CONTACT' },
];

export default function Header() {
  return (
    <HeaderContainer>
      <RightHeaderGroup>
        <LinkText href="/" primaryColor={PRIMARY_TEXT_COLOR} hoverColor={PRIMARY_TEXT_COLOR_HOVER}>
          <HeaderText>ANDREW DAI</HeaderText>
        </LinkText>
      </RightHeaderGroup>
      <LeftHeaderGroup>
        {rightRoutes.map((route) => {
          return (
            <LinkText
              href={route.route}
              key={route.route}
              primaryColor={PRIMARY_TEXT_COLOR}
              hoverColor={PRIMARY_TEXT_COLOR_HOVER}
            >
              <HeaderText>{route.text}</HeaderText>
            </LinkText>
          );
        })}
      </LeftHeaderGroup>
    </HeaderContainer>
  );
}
