import React from 'react';
import './footer.scss';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="container__box">
          <div class="social">
            <h6>Follow us on</h6>

            <YouTubeIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>

          <div class="app-stores">
            <h5>Download our games from</h5>
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
      </div>
    </div>
  );
}
