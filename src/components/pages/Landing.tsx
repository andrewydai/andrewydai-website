import React from 'react';
import Header from '../Header';
import LandingSplash from '../LandingSplash';
import LandingExplore from '../LandingExplore';

export default function Landing() {
  return (
    <div>
      <Header currentPath='/'/>
      <LandingSplash />
      <LandingExplore />
    </div>
  );
}