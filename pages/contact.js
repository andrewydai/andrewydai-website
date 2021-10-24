import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PRIMARY_BACKGROUND } from '../constants/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const ColoredBackground = styled.div`
  background: ${PRIMARY_BACKGROUND};
`;

export default function Contact() {
  return (
    <ColoredBackground>
      <GlobalStyle />
      <Header />
      <Footer />
    </ColoredBackground>
  );
}
