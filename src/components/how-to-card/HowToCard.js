/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './HowToCard.css';

export default function HowToCard({ step, title, subtitle, image, alt }) {
  return (
    <div className={`how__card how__card_${step}`}>
      <img src={image} alt={alt} className="how__img" />
      <p className="how__card-number">{step}</p>
      <h3 className="how__card-title">{title}</h3>
      <p className="how__paragraph">{subtitle}</p>
    </div>
  );
}
