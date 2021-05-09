import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

interface HeaderProps {
    currentPath?: string;
}

const HeaderContainer = styled.div`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 75px;
    background: #09185D;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const NavButton = styled(Link)`
    font-family: 'Lato', sans-serif;
    color: #EFF8E2;
    font-size: 25px;
    padding: 5px 20px 5px 20px;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`

const HighlightedNavButton = styled(NavButton)`
    background: #040A25;
`
type NavObject = { label: string, path: string }
const NavigationOptions: NavObject[] = 
[
    {label: 'Home', path: '/'}, 
    {label: 'Experiences', path: '/experiences'}, 
    {label: 'Projects', path: '/projects'}, 
    {label: 'About Me', path: '/about'}
]

export default function Header(props: HeaderProps) {
    return (
      <HeaderContainer >
        {NavigationOptions.map(navOption => {
            if(navOption.path === props.currentPath) return <HighlightedNavButton to={navOption.path}>{navOption.label}</HighlightedNavButton>
            return <NavButton to={navOption.path}>{navOption.label}</NavButton>
        })}
      </HeaderContainer>
      );
}