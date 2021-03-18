import React from 'react';
import './homepage.scss';
import Header from '../../components/Header/Header';
import Section1 from '../../components/Section/Section1';
import Section2 from '../../components/Section/Section2';
import Section3 from '../../components/Section/Section3';
import Section4 from '../../components/Section/Section4';
import Footer from '../../components/footer/Footer';

export default function Homepage() {
  return (
    <div className="homepage">
      <Section1
        title="SUPERCELL"
        para="Makers of Hay Day, Clash of Clans, Boom Beach, Clash Royale and Brawl Stars."
        button="See latest"
      />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
