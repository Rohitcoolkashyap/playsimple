import React from 'react';
import './section3.scss';
import { Button } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Section3() {
  return (
    <div className="section3">
      <div className="section3__left">
        <h1>GAMES</h1>
        <p>
          Our dream is to create games that are played by as many people as
          possible, enjoyed for years and remembered forever.
        </p>
        <Button variant="contained" size="large" color="primary">
          see games
        </Button>
      </div>

      <div className="section3__right">
        <LazyLoadImage
          alt=""
          effect="blur"
          width="800px"
          src="fp_wmg_brawlstars.png" // use normal <img> attributes as props
        />
      </div>
    </div>
  );
}
