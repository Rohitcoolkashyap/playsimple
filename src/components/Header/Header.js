import React, { useState } from 'react';
import './header.scss';
import './dropdown.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import data from '../../data.json';
export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src="w.png" alt="" />
        </Link>
        <ul className="header__left__menu">
          <li>
            <span>
              <div className="dropdown">
                <Link to="/games">Games</Link>

                <div className="dropdown-content">
                  <a href="#">HayDay</a>
                  <a href="#">ClashOfClan</a>
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
                <Link to="/careers">Careers</Link>

                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
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
                <Link>...</Link>

                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
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
              <h1>{val.name}</h1>
            ))}
        </div>
      </div>
    </div>
  );
}
