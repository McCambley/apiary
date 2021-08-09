import React from 'react';
import './SellingPoints.css';

function SellingPoints(props) {
    return (
        <section className="selling-points">
            <div className="selling-points__title-group">
                <h2 className="selling-points__title">{props.title}</h2>
                <p className="selling-points__subtitle">{props.subtitle}</p>
            </div>
            <div className="selling-points__image-card-group">
                <div className="selling-points__image-card-wrap-container">
                    <div className="image-card">
                        <img className={`image-card__image ${props.componentType === "lead" ? 'image-card__image_type_resources' : 'image-card__image_type_quality'}`} src={props.cardAImage} alt={props.cardAAlt} />
                        <p className="image-card__title">{props.cardATitle}</p>
                        <p className="image-card__description">{props.cardADescription}</p>
                    </div>
                </div>
                <div className="image-card">
                    <img className={`image-card__image ${props.componentType === "lead" ? 'image-card__image_type_publicize' : 'image-card__image_type_professionalism'}`} src={props.cardBImage} alt={props.cardBAlt} />
                    <p className="image-card__title">{props.cardBTitle}</p>
                    <p className="image-card__description">{props.cardBDescription}</p>
                </div>
                <div className="image-card">
                    <img className={`image-card__image ${props.componentType === "lead" ? 'image-card__image_type_boost' : 'image-card__image_type_speciality'}`} src={props.cardCImage} alt={props.cardCAlt} />
                    <p className="image-card__title">{props.cardCTitle}</p>
                    <p className="image-card__description">{props.cardCDescription}</p>
                </div>
            </div>
        </section>
    )
}

export default SellingPoints;