/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import './Requests.css';
import { Link } from 'react-router-dom';
import requests from '../../arrays/what-requests';

function Requests(props) {
  function onProfessionPageClick() {
    props.setIsProfessionPageFocused(true);
  }

  function handleLinkClick(courseTitle) {
    // adjusts content of header component
    onProfessionPageClick();
    // updates global courseQuery variable to render new course data
    props.onCourseClick(courseTitle);
  }
  return (
    <section className="requests">
      <h2 className="requests__title">What requests can we help with?</h2>
      <p className="requests__subtitle">
        We carry out important, non-urgent tasks, with results that you can use in your work.
      </p>
      <div className="requests__card-container">
        {requests.map((item) => (
          <Link
            key={item.id}
            className="card"
            to={item.link}
            onClick={() => handleLinkClick(item.title)}
          >
            <p className="card__hashtag">{item.hashtag}</p>
            <p className="card__title">{item.title}</p>
            <img className="card__image" src={item.image} alt={item.alt} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Requests;
