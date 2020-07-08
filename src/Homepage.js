import React from 'react';
import Slideshow from './Slideshow.js';
import Navigation from './Navigation.js'; 
import GroupsList from './GroupsList.js';

const Homepage = () => {

  return (
    <div> 
      <Navigation />
      <Slideshow />
      <GroupsList />
    </div>
  )
}

export default Homepage;
