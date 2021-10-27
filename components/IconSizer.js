import React from 'react';
import styled from 'styled-components';
import { PRIMARY_TEXT_COLOR } from '../constants/colors';

export default function IconSizer({ icon, iconHeight, iconWidth }) {
  const ResizedIcon = styled(icon)`
    width: ${(props) => props.iconWidth}px;
    height: ${(props) => props.iconHeight}px;
    margin-left: ${(props) => props.iconWidth / 2}px;
    margin-right: ${(props) => props.iconWidth / 2}px;
    color: ${PRIMARY_TEXT_COLOR};
  `;

  return <ResizedIcon iconHeight={iconHeight} iconWidth={iconWidth} />;
}
