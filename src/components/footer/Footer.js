import React from 'react';
import './footer.scss';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icons from './Icons';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="container__box">
          <div class="social">
            <h6>Follow us on</h6>

            <Icons />
          </div>

          <div class="app-stores">
            <a href="https://supr.cl/appstorescgames" class="appstore">
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6715068722362591614&amp;hl=en"
              class="googleplay"
            >
              Google Play
            </a>
          </div>
        </div>
        <hr />
        <div className="footer__tags">
          <h6>Terms of Service</h6>
          <h6>Privacy Policy</h6>
          <h6>Parent's Guide</h6>
          <h6>Safe and Fair Play Policy</h6>
        </div>
        <div className="footer__end">
          <div className="end__left">
            <p>Supercell Oy</p>
            <p>Jätkäsaarenlaituri 1</p>
            <p>00180 Helsinki</p>
            <p>Finland</p>
          </div>
          <img src="w.png" alt="" />
        </div>
      </div>
    </div>
  );
}
