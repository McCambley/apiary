import React from 'react';
import HowToCard from '../how-to-card/HowToCard';
import content from '../../arrays/how-to-start';
import './HowToStart.css';

export default function HowToStart() {
  return (
    <section className="how">
      <h2 className="how__title">How to start?</h2>
      <div className="how__content">
        <div className="how__step-container">
          <p className="how__step">1</p>
          <div className="how__step-line" />
          <p className="how__step">2</p>
          <div className="how__step-line" />
          <p className="how__step">3</p>
        </div>
        {content.map((card, index) => (
          <HowToCard
            key={card.id}
            step={index + 1}
            title={card.title}
            subtitle={card.subTitle}
            image={card.image}
            alt={card.alt}
          />
        ))}
      </div>
      <button type="button" className="how__button">
        Delegate a Task
      </button>
    </section>
  );
}
