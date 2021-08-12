/* eslint-disable react/button-has-type */
import React from 'react';
import './Hero.css';
import { useQuery, gql } from '@apollo/client';
import HeroImage from '../../images/hero-meditation.png';

const QUERY = gql`
  query Projects {
    studentReviewCollection {
      items {
        title
        subtitle
        description
      }
    }
    companyReviewCollection {
      items {
        title
        subtitle
        description
      }
    }
    infoCollection {
      items {
        title
        description
        date
        link
        linkText
      }
    }
    coverImageCollection {
      items {
        title
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;

// uncomment below to see an example of how you would grab data

function Hero() {
  const { data, errors, loading } = useQuery(QUERY);
  return (
    <section className="hero">
      <div className="hero__cta-wrapper">
        {loading ? (
          <h2>is loading</h2>
        ) : (
          <ul>
            {data.coverImageCollection.items.map((project, index) => {
              console.log(data);
              return (
                <li key={index}>
                  <h2>{}</h2>
                  <img src={project.image.url} alt="as" />
                </li>
              );
            })}
          </ul>
        )}
        <h1 className="hero__title">
          Your task. Done by data and web development students. <br />
          <span className="hero__title-orange">For Free!</span>
        </h1>
        <button className="hero__cta-button hero__cta-button_desktop">Delegate a task</button>
      </div>
      <img src={HeroImage} alt="hero" className="hero__image" />
      <button className="hero__cta-button hero__cta-button_mobile">Delegate a task</button>
    </section>
  );
}

export default Hero;
