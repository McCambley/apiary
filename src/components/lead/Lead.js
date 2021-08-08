import React from 'react';
import './Lead.css';
import ResourceSavingImage from '../../images/hands.png';
import PublicizeImage from '../../images/megaphone.png';
import PRBoostImage from '../../images/rocket.png';

function Lead() {
    return (
        <section className="lead">
            <div className="lead__title-group">
                <h2 className="lead__title">Why is it useful for your company?</h2>
                <p className="lead__subtitle">By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness.</p>
            </div>
            <div className="lead__image-card-group">
                <div className="image-card">
                    <img className="image-card__image" src={ResourceSavingImage} alt="hands exchanging resources" />
                    <p className="image-card__title">Resource saving</p>
                    <p className="image-card__description">Delegate tasks for free and get results that can be used in your future work.</p>
                </div>
                <div className="image-card">
                    <img className="image-card__image" src={PublicizeImage} alt="megaphone and media marketing" />
                    <p className="image-card__title">Publicize</p>
                    <p className="image-card__description">We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.</p>
                </div>
                <div className="image-card">
                    <img className="image-card__image" src={PRBoostImage} alt="rocket ship" />
                    <p className="image-card__title">PR boost</p>
                    <p className="image-card__description">This will increase the visibility of the company among job seekers and attract those who share the values of your company.</p>
                </div>
            </div>
        </section>
    )
}

export default Lead;