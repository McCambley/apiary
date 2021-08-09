import React from 'react';
import './Requests.css';
import requests from '../../arrays/what-requests';

function Requests() {
  return (
    <section className="requests">
      <h2 className="requests__title">What requests can we help with?</h2>
      <p className="requests__subtitle">
        We carry out important, non-urgent tasks, with results that you can use in your work.
      </p>
      <div className="requests__card-container">
        {requests.map((item) => (
          <div key={item.id} className="card">
            <p className="card__hashtag">{item.hashtag}</p>
            <p className="card__title">{item.title}</p>
            <img className="card__image" src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Requests;
