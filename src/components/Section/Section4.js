import { Button } from '@material-ui/core';
import React from 'react';
import './section4.scss';
export default function Section4() {
  return (
    <div className="section4">
      <div className="section4__left">
        <h1>GAMES</h1>
        <p>
          Our dream is to create games that are played by as many people as
          possible, enjoyed for years and remembered forever.
        </p>
        <Button variant="contained" size="large" color="primary">
          Large
        </Button>
      </div>
    </div>
  );
}
