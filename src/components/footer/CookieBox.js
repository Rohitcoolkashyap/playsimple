import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './cookieBox.scss';
import CookieConsent, { Cookies } from 'react-cookie-consent';

export default function CookieBox() {
  return (
    <div className={`cookie__box`}>
      <CookieConsent
        location="bottom"
        buttonText="GOT IT!"
        cookieName="myAwesomeCookieName2"
        style={{ background: 'rgba(0, 0, 0, 0.77)' }}
        buttonStyle={{ color: 'white', fontSize: '16px' }}
        expires={150}
        buttonStyle={{
          fontWeight: 'bold',
          backgroundColor: '#2d85f3 ',
          color: 'white',
          width: '100px',
          fontSize: '1rem',
          borderRadius: '5px',
          padding: '10px',
        }}
        onAccept={() => {}}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}
