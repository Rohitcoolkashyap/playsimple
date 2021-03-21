import { Button } from '@material-ui/core';
import React from 'react';
import Card from './Card';
import cards1 from '../../cards1.json';
import './section2.scss';

export default function Section2({ num }) {
  return (
    <div className="section2">
      <div className="section2__cards">
        {cards1[num].map((data) => (
          
          <Card
            title={data.title}
            para={data.para}
            img={data.img}
            link={data.link}
          />
        ))}
      </div>

      <Button variant="contained" size="large" color="primary">
        News archive
      </Button>
    </div>
  );
}
