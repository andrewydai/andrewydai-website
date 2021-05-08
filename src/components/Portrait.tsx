import React from 'react';
import styled from 'styled-components'
import PortraitHeadshot from '../images/portrait_headshot.png'

const StyledPortrait = styled.img`
    position: absolute;
    bottom: 0px;
    right: 150px;
    width: 500px;
`

export default function Portrait() {
    return <StyledPortrait src={PortraitHeadshot} alt="bad"/>
}