/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfessionHero.css';
import professionHeroTitles from '../../arrays/profession-hero-titles';
import professionHeroCards from '../../arrays/profession-hero-cards';

function ProfessionHero() {
  const { id } = useParams();
  const professionTitles = professionHeroTitles;
  const professionTitle = professionTitles.find((page) => page.id === id);

  const professionCards = professionHeroCards;
  const professionCard = professionCards.find((cardGroup) => cardGroup.id === id);

  return (
    <section className="profession">
      <div className="profession__intro-group">
        <img className="profession__image" src={professionTitle.image} alt="beep" />
        <div className="profession__title-group">
          <h2 className="profession__title">{professionTitle.title}</h2>
          <p className="profession__subtitle">{professionTitle.subtitle}</p>
        </div>
      </div>
      <div className="profession__card-group">
        {professionCard.cards.map((card) => (
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