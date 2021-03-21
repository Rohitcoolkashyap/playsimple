import React, { useState } from 'react';
import './header.scss';
import './dropdown.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import data from '../../data.json';
export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menu, setMenu] = useState(false);

  const show = !menu ? 'header__left__menu' : 'header__left__menu show';
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src="/w.png" alt="logo" />
        </Link>
        <ul className={show}>
          <li>
            <span>
              <div className="dropdown">
                <span>
                  <Link to="/games">Games</Link>
                </span>

                <div className="dropdown-content">
                  <Link to="/games/hayday">HayDay</Link>

                  <a href="#">Clash Of Clan</a>
                  <a href="#">Boom Beach</a>
                  <a href="#">Clash Royal</a>
                  <a href="#">Brawl stars</a>
                </div>
              </div>
            </span>
          </li>
          <li>
            <span>
              <div className="dropdown">
                <span>
                  <Link to="/careers">Careers</Link>
                </span>

                <div className="dropdown-content">
                  <a href="#">Why you might love it here</a>
                  <a href="#">Our Offices</a>
                  <a href="#">Joining supercell</a>
                  <a href="#">Living in tokyo</a>
                  <a href="#">Stay in paris</a>
                </div>
              </div>
            </span>
          </li>
          <li>
            <span>
              {' '}
              <Link to="/support">Support</Link>
            </span>
          </li>
          <li className="three">
            <span>
              <div className="dropdown">
                <span>
                  <Link>...</Link>
                </span>

                <div className="dropdown-content">
                  <a href="#">News</a>
                  <a href="#">Our Story</a>
                  <a href="#">Be Safe And Play Safe</a>
                  <a href="#">For Media</a>
                  <a href="#">Investment</a>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__right__logo">
          <Link to="/">
            <img src="logo_supercell_id.png" alt="" />
          </Link>
        </div>

        <div class="search">
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            placeholder=" "
          />
          <div>
            <svg>
              <use xlinkHref="#path" />
            </svg>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 28"
              id="path"
            >
              <path
                d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
                transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
              />
            </symbol>
          </svg>

          <a
            class="dribbble"
            href="https://dribbble.com/shots/5547403-Search-input-animation"
            target="_blank"
          />
          <img
            src="https://dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png"
            alt=""
          ></img>
          <SearchIcon />
        </div>
        <div className="search__results">
          {data
            .filter((val) => {
              if (searchTerm === '') {
                return '';
              } else if (
                val.name
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => (
              <h5>
                <Link to={val.target}>{val.name}</Link>
              </h5>
            ))}
        </div>
        {!menu ? (
          <MenuIcon onClick={() => setMenu(!menu)} className="menuBar" />
        ) : (
          <CloseIcon onClick={() => setMenu(!menu)} className="menuBar" />
        )}
      </div>
    </div>
  );
}
