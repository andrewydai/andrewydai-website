import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: linear-gradient(to right, #00d2ff, #3a7bd5);
  height: 100vh;
  width: 100vw;
`

const TitleFont = styled.span`
  position: absolute;
  top: 30vh;
  left: 350px;
  font-family: 'Lato', sans-serif;
  font-size: 50px;
  font-weight: 900;
  color: #E5FFDE;
`

function App() {
  return (
    <AppContainer>
      <TitleFont>Hello, I'm Andrew!</TitleFont>
    </AppContainer>
  );
}

export default App;
