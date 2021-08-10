/* eslint-disable react/prop-types */
import React from 'react';

export default function Review({ data }) {
  const { avatar, description, link, subtitle, title } = data;
  return (
    <li>
      {/* map images */}
      <div className="review">Hello!</div>
      <h2 className="review__image">{description}</h2>
      <img src={avatar} alt="A dude" />
    </li>
  );
}
