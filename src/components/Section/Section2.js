import { Button } from '@material-ui/core';
import React from 'react';
import Card from './Card';
import './section2.scss';
export default function Section2() {
  return (
    <div className="section2">
      <div className="section2__cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Button variant="contained" size="large" color="primary">
        News archive
      </Button>
    </div>
  );
}
