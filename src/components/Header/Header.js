import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src="w.png" alt="" />
        </Link>
        <ul className="header__left__menu">
          <li>
            <span>
              <Link to="/games">Games</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Games</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Games</Link>
            </span>
          </li>
          <li>
            <span>
              <Link>Games</Link>
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

        <div className="header__right__search">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
