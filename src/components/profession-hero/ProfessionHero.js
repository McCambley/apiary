/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import './ProfessionHero.css';

function ProfessionHero(props) {
  return (
    <section className="profession">
      <div className="profession__intro-group">
        <img className="profession__image" src={props.professionTitle.image} alt="beep" />
        <div className="profession__title-group">
          <h2 className="profession__title">{props.professionTitle.title}</h2>
          <p className="profession__subtitle">{props.professionTitle.subtitle}</p>
        </div>
      </div>
      <div className="profession__card-group">
        {props.professionCard.cards.map((card) => (
          <div key={card.id} className={`profession-card profession-card_type_${card.class}`}>
            <div className="profession-card__content-group">
              <h3 className="profession-card__number">{card.id}</h3>
              <p className="profession-card__title">{card.title}</p>
              <p className="profession-card__subtitle">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionHero;