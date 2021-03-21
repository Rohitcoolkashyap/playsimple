import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carosel from '../../components/carousel/Carosel';
import Icons from '../../components/footer/Icons';
import './hayday.scss';

export default function Hayday() {
  // const [content1, setContent1] = useState({});
  // const [content2, setContent2] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await axios.get(
  //         'https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json',
  //       );

  //       setLoading(false);
  //       setContent1(data);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="hayday">
      <div className="hayday__cover"></div>
      <div className="hayday__section1">
        <span className="section1__cover"></span>
        <div className="hayday__section1__details">
          <h1>FARM WITH FRIENDS AND FAMILY</h1>
          <p>
            You don’t have to be from a farm to be a great farmer. Hay Day lets
            you get back to nature and experience the simple life of working the
            land. It’s a special game set in a real special place. Food grows
            free, people smile and the animals are always happy to see you. It
            never rains here, but the crops never die. And if you’re craving a
            little bacon, one of the pigs will be happy to fry some up for you.
            After all, what are pigs... oops, we mean neighbors for?
          </p>
          <div className="section1__icons">
            <img src="/unnamed.png" alt="" />
            <img src="/unnamed (1).png" alt="" />

            <img src="/unnamed (2).png" alt="" />

            <img src="/unnamed.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="hayday__builder">
        <div className="builder__heading">
          <h1>CONSTANTLY EVOLVING</h1>
          <p>
            Hay Day has been constantly evolving to offer more user-friendly,
            consistent and fun online experiences for Supercell gamers. There
            have been countless updates since the game launched in 2012.
          </p>
        </div>

        <div className="builder__inner">
          <div className="inner__tags">
            <p>Global Launch</p>
            <p>Global Launch</p>
            <p>Global Launch</p>
            <p>Global Launch</p>
            <p>Global Launch</p>
            <p>Global Launch</p>
          </div>
          <img className="img2" src="/bg_timeline_hayday.png" alt="" />
        </div>
        <img className="img1" src="/line.png" alt="" />
      </div>
      <div className="hayday__section3">
        <div className="section3__cover">
          <img src="/bg_gamewebsite_hayday.png" alt="" />
          <div className="section3__details">
            <h1>STAY UP-TO-DATE</h1>
            <p>
              To stay on top of your game, keep an eye on the in-game News
              section. Follow us on social media for the latest chatter and
              sneak peeks on what the team is working on. Don’t be a stranger
              and join the conversation.
            </p>
            <h6>FOLLOW HAY DAY ON</h6>
            <div className="section3__icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>

      <div className="hayday__carosel">
        <Carosel />
      </div>
    </div>
  );
}
