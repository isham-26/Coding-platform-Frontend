import React from 'react';
import Home1 from '../components/home1/Home1';
import Home2 from '../components/home2/Home2';
import Home3 from '../components/home3/Home3';
import Hero from '../components/herosection/Hero';

const HomePage = () => {
  return (
    <div className="">
    {/* <Hero/> */}
      <Home1/>
      <Home2/>
      <Home3  />
    </div>
  );
};

export default HomePage;
