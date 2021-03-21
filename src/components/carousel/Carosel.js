import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

export default function Carosel() {
  var items = [
    {
      src: 'https://www.youtube.com/embed/5BQOgUWU59w',
    },
    {
      src: 'https://www.youtube.com/embed/OStAo1NTi2k',
    },
    {
      src: 'https://www.youtube.com/embed/eL7GZYOFrDc',
    },
    {
      src: 'https://www.youtube.com/embed/dloBiZdmgHw',
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      swipe={true}
      animation="slide"
      interval={2000}
      timeout={500}
      fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'black',
          borderRadius: '15px',
          padding: '20px',
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          top: '0',
          marginLeft: '222px',
          marginRight: '222px',

          transform: 'translate(0%,200%)',
        },
      }}
      NextIcon=">" // Change the "inside" of the next button to "next"
      PrevIcon="<"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className="carosel">
      <iframe
        width="1912"
        height="732"
        src={props.item.src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Paper>
  );
}
