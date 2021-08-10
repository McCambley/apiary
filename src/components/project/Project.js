/* eslint-disable react/prop-types */
import React from 'react';
import './Project.css';
import Review from '../review/Review.js';

export default function Project({ data }) {
  console.log(data.reviews);
  console.log(data);
  return (
    <li className="project">
      <div className="project__info-container">
        <img src="" alt="Project demo" className="project__image" />
        <div className="project__info">
          <div className="project__titles">
            <h2 className="project__title">Title</h2>
            <h3 className="project__subtitle">Subtitle</h3>
          </div>
          <div className="project__date-link">
            <p className="project__date">Today?</p>
            <a href="/" className="project__link">
              Here
            </a>
          </div>
        </div>
        <ul className="project__reviews">
          {data.reviews.map((review) => (
            <Review key={review.id} data={review} />
          ))}
        </ul>
      </div>
      {}
      <div>{data.info.title}</div>
    </li>
  );
}
