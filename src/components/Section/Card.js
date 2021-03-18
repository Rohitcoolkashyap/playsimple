import React from 'react';

export default function Card({ title, para, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div
        class="field field-name-field-category field-type-list-text field-label-hidden"
        data-swiftype-index="false"
      >
        {title}
      </div>
      <h3>
        <a href="/en/news/art-of-supercell-10th-anniversary-edition-out-now/7506/">
          <div class="field field-name-field-teaser-title field-type-text field-label-hidden para">
            {para}
          </div>
        </a>
      </h3>
    </div>
  );
}
