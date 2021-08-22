/* eslint-disable react/prop-types */
import React from 'react';
import './Review.css';

export default function Review({ data }) {
  const { title, subtitle, quote, avatarsCollection } = data;

  const [displayedReview, setReview] = React.useState(quote);
  const [isReviewExpanded, setExpanded] = React.useState(false);

  const lengthLimit = 290;
  const shortenedReview = `${quote.slice(0, lengthLimit)}..."`;
  const isLong = quote.length > lengthLimit;

  React.useEffect(() => {
    if (quote.length > lengthLimit) {
      setReview(shortenedReview);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDisplayAmountClick() {
    if (displayedReview !== quote) {
      setReview(quote);
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
          {avatarsCollection.items.map((image, index) => (
            // index used as key as images are duplicates and contain the same system id
            <img key={index} src={image.url} alt="A dude" className="review__avatar" />
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
