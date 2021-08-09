/* eslint-disable react/prop-types */
import React from 'react';
import './SellingPoints.css';

function SellingPoints({ props }) {
  return (
    <section className="selling-points">
      <div className="selling-points__title-group">
        <h2 className="selling-points__title">{props.title}</h2>
        <p className="selling-points__subtitle">{props.subtitle}</p>
      </div>
      <ul className="selling-points__image-card-group" style={{ listStyle: 'none' }}>
        {props.data.map((item) => (
          <li key={item.id} className="selling-points__image-card-wrap-container">
            <div className="image-card">
              <img className="image-card__image" src={item.image} alt={item.alt} />
              <p className="image-card__title">{item.title}</p>
              <p className="image-card__description">{item.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SellingPoints;
