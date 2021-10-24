import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Text = styled.div`
  cursor: pointer;
  color: ${(props) => props.primaryColor};
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${(props) => props.primaryColor},
    ${(props) => props.hoverColor} 50%,
    ${(props) => props.primaryColor} 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  &:hover {
    background-position: 0 100%;
  }
`;

export default function LinkText({ children, href, primaryColor, hoverColor }) {
  return (
    <Link href={href}>
      <Text primaryColor={primaryColor} hoverColor={hoverColor}>
        {children}
      </Text>
    </Link>
  );
}
