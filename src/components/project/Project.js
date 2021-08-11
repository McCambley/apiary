/* eslint-disable react/prop-types */
import React from 'react';
import './Project.css';
import Review from '../review/Review.js';

export default function Project({ data }) {
  return (
    <li className="project">
      <div className="project__info-container">
        <img src={data.image.image} alt="Project demo" className="project__image" />
        <div className="project__info">
          <div className="project__titles">
            <h2 className="project__title">{data.info.title}</h2>
            <h3 className="project__subtitle">{data.info.subtitle}</h3>
          </div>
          <div className="project__date-link">
            <p className="project__date">{data.info.date}</p>
            <a
              href={data.info.link}
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website →
            </a>
          </div>
        </div>
      </div>
      <ul className="project__reviews">
        {data.reviews.map((review) => (
          <Review key={review.id} data={review} />
        ))}
      </ul>
    </li>
  );
}
