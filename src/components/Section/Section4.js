import { Button } from '@material-ui/core';
import React from 'react';
import './section4.scss';
export default function Section4() {
  return (
    <div className="section4">
      <div className="section4__left">
        <h1>CAREERS</h1>
        <p>
          Join us and create games that are played for years and remembered
          forever.
        </p>
        <Button variant="contained" size="large" color="primary">
          see careers
        </Button>
      </div>
    </div>
  );
}
