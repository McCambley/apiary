/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfessionHero.css';

function ProfessionHero(props) {
  const { id } = useParams();
  console.log(props);
  const professionPages  = props.professionHeroTitles;
  const professionPage = professionPages.find((page) => page.id === id);

  return (
    <section className="profession">
      <div className="profession__intro-group">
        <img className="profession__image" src={professionPage.image} alt="beep" />
        <div className="profession__title-group">
          <h2 className="profession__title">{professionPage.title}</h2>
          <p className="profession__subtitle">{professionPage.subtitle}</p>
        </div>
      </div>
      <div className="profession__card-group">
        <div className="profession-card profession-card_type_a">
          <div className="profession-card__content-group">
            <h3 className="profession-card__number">1</h3>
            <p className="profession-card__title">
              {props.cardATitle}Create a one page website from scratch
            </p>
            <p className="profession-card__subtitle">
              {props.cardASubtitle}We can create a landing page for a new project or refresh an
              existing one
            </p>
          </div>
        </div>
        <div className="profession-card profession-card_type_b">
          <div className="profession-card__content-group">
            <h3 className="profession-card__number">2</h3>
            <p className="profession-card__title">
              {props.cardBTitle}We make up your website design
            </p>
            <p className="profession-card__subtitle">
              {props.cardBSubtitle}If you already have a website design, we will gladly prepare an
              adaptive layout.
            </p>
          </div>
        </div>
        <div className="profession-card profession-card_type_c">
          <div className="profession-card__content-group">
            <h3 className="profession-card__number">3</h3>
            <p className="profession-card__title">
              {props.cardCTitle}Let's create a complex multi-page website for the project
            </p>
            <p className="profession-card__subtitle">
              {props.cardCSubtitle}We are able to work on highly complex websites with deeply nested
              pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionHero;
