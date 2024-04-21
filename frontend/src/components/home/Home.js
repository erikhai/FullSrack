import React from 'react';
import Hero from '../hero/Hero';

const Home = ({ footballClubs }) => {
  return (
    <Hero footballClubs={footballClubs} />
  );
}

export default Home;