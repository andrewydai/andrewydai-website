import React from 'react';
import styled from 'styled-components'
import PortraitHeadshot from '../images/portrait_headshot.jpg'

const SizeContainer = styled.div`
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    border: 5px solid #F4F7F5;
`

const StyledPortrait = styled.img`
    position: absolute;
    top: -30px;
    width: 400px;
    background: #A2B1F6;
`

export default function Portrait() {
    return (
        <SizeContainer>
            <StyledPortrait src={PortraitHeadshot} alt="bad"/>
        </SizeContainer>
    )
}