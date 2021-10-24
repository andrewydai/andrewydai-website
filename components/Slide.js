import React from 'react';
import styled from 'styled-components';

const SnapScrollSlide = styled.div`
  scroll-snap-align: start;
`;

export default function Slide({ children }) {
  return <SnapScrollSlide>{children}</SnapScrollSlide>;
}
