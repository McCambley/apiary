/* eslint-disable react/prop-types */
import React from 'react';
import './Review.css';

export default function Review({ data }) {
  const { avatars, description, subtitle, title } = data;

  const [displayedReview, setReview] = React.useState(description);
  const [isReviewExpanded, setExpanded] = React.useState(false);

  const lengthLimit = 290;
  const shortenedReview = `${description.slice(0, lengthLimit)}..."`;
  const isLong = description.length > lengthLimit;

  React.useEffect(() => {
    if (description.length > lengthLimit) {
      setReview(shortenedReview);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDisplayAmountClick() {
    if (displayedReview !== description) {
      setReview(description);
      setExpanded(true);
    } else {
      setReview(shortenedReview);
      setExpanded(false);
    }
  }

  return (
    <li className="review">
      <div className="review__reviewer-info">
        <div className="review__avatar-container">
          {avatars.map((image) => (
            <img key={image.id} src={image.src} alt="A dude" className="review__avatar" />
          ))}
        </div>
        <div className="review__title-container">
          <div className="review__title">{title}</div>
          <h2 className="review__subtitle">{subtitle}</h2>
        </div>
      </div>
      <p className="review__review">{displayedReview}</p>
      <button
        type="button"
        className={`review__show ${!isLong && 'review__show_hidden'}`}
        onClick={handleDisplayAmountClick}
      >
        {!isReviewExpanded ? 'Read full review' : 'Show less'}
      </button>
    </li>
  );
}
