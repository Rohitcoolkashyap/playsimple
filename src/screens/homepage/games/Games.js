import React, { useEffect } from 'react';
import './games.scss';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/Header/Header';
import Section1 from '../../../components/Section/Section1';
import Section2 from '../../../components/Section/Section2';
import axios from 'axios';

export default function Games() {
  useEffect(() => {
    const { data } = axios.get(
      'https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json',
    );
    console.log(data);
  });
  return (
    <div className="games">
      <Section1
        title="GAMES"
        para="Farm, Clash, Boom, Battle, Brawl!"
        button="SEE ALL GAMES"
        img="bg_hero_games (1).jpg"
      />

      <Section2 num={1} />
    </div>
  );
}
