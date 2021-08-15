import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import PageNotFoundImage from '../../images/404-cones.png';

function PageNotFound() {
  return (
    <div className="not-found" id="wrapper">
      <div className="not-found__link-wrapper">
        <Link className="not-found__link" to="/">
          Back to homepage
        </Link>
      </div>
      <img className="not-found__image" src={PageNotFoundImage} alt="404" />
      <div className="not-found__text-wrapper" id="info">
        <h3 className="not-found__text">The page you are looking for could not be found.</h3>
      </div>
    </div>
  );
}

export default PageNotFound;
