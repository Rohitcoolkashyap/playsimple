import React from 'react';
import './games.scss';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/Header/Header';
import Section1 from '../../../components/Section/Section1';
import Section2 from '../../../components/Section/Section2';

export default function Games() {
  return (
    <div className="games">
      <Section1
        title="GAMES"
        para="Farm, Clash, Boom, Battle, Brawl!"
        button="SEE ALL GAMES"
      />
      <Section2 />
      <Footer />
    </div>
  );
}
