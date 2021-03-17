import React from 'react';
import './section3.scss';
import { Button } from '@material-ui/core';
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
          Large
        </Button>
      </div>

      <div className="section3__right">
        <img src="fp_wmg_brawlstars.png" alt="" />
      </div>
    </div>
  );
}
