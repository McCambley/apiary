import React from 'react';
import './SellingPoints.css';

function SellingPoints({ title, subtitle, data }) {
  return (
    <section className="selling-points">
      <article className="selling-points__content-container">
        <div className="selling-points__title-group">
          <h2 className="selling-points__title">{title}</h2>
          <p className="selling-points__subtitle">{subtitle}</p>
        </div>
        <ul className="selling-points__image-card-group" style={{ listStyle: 'none' }}>
          {data.map((item) => (
            <li key={item.id} className="selling-points__image-card-wrap-container">
              <div className="image-card">
                <img className="image-card__image" src={item.image} alt={item.alt} />
                <p className="image-card__title">{item.title}</p>
                <p className="image-card__description">{item.subTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default SellingPoints;
