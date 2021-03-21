import React from 'react';
import './section1.scss';
export default function Section1({ title, para, button, img }) {
  const styles = {
    backgroundImage: `url('./${img}')`,
  };
  return (
    <div style={styles} className="section1">
      <div className="section1__info">
        <h1>{title}</h1>

        <p class="dark">{para}</p>
        <div class="buttons">
          <a
            data-ga-track="event"
            data-ga-action="Click"
            data-ga-category="In-page navigation"
            data-ga-opt_label="See latest"
            class="button18-arrow readmore"
            href="#news"
          >
            <span>»</span>
            <span>{button}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
