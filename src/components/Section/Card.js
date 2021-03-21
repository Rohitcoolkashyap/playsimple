import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Card({ title, para, img, link }) {
  return (
    <div className="card">
      <Link to={`/games${link}`}>
        <LazyLoadImage
          alt=""
          effect="blur"
          width="800px"
          className='games__image'
          src={img} // use normal <img> attributes as props
        />
      </Link>
      <div
        class="field field-name-field-category field-type-list-text field-label-hidden"
        data-swiftype-index="false"
      >
        {title}
      </div>
      <h3>
        <a href="/en/news/art-of-supercell-10th-anniversary-edition-out-now/7506/">
          <div class="field field-name-field-teaser-title field-type-text field-label-hidden para">
            <Link to={`/games${link}`}>{para}</Link>
          </div>
        </a>
      </h3>
    </div>
  );
}
