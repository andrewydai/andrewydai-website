import styled from 'styled-components';
import Link from 'next/link';
import { PRIMARY_TEXT_COLOR, PRIMARY_TEXT_COLOR_HOVER } from '../constants/colors';

const HeaderContainer = styled.div`
  padding: 20px 100px 20px 100px;
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  cursor: pointer;
  color: ${PRIMARY_TEXT_COLOR};
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${PRIMARY_TEXT_COLOR_HOVER},
    ${PRIMARY_TEXT_COLOR_HOVER} 50%,
    ${PRIMARY_TEXT_COLOR} 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  font-size: 15px;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
  &:hover {
    background-position: 0 100%;
  }
`;

const LeftHeaderGroup = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderText>ANDREW DAI</HeaderText>
      </Link>
      <LeftHeaderGroup>
        <Link href="/experiences">
          <HeaderText>EXPERIENCES</HeaderText>
        </Link>
        <HeaderText>PROJECTS</HeaderText>
        <HeaderText>ABOUT</HeaderText>
        <HeaderText>CONTACT</HeaderText>
      </LeftHeaderGroup>
    </HeaderContainer>
  );
}
