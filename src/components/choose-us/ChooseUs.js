import React from 'react';
import SellingPoints from '../selling-points/SellingPoints.js';
import '../selling-points/SellingPoints.css';
import QualityImage from '../../images/star-world.png';
import ProfessionalismImage from '../../images/grad-laptop.png';
import SpecialityImage from '../../images/bees-n-flowers.png';

function ChooseUs() {
    return (
        <SellingPoints
        componentType="choose-us"
        title="Why choose us?"
        subtitle="We have built the largest IT company in Russia. We know how to develop cool employees, and we work hard to make our clients' lives better and happier."
        cardAImage={QualityImage}
        cardAAlt="globe with 5 stars"
        cardATitle="Quality"
        cardADescription="The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed."
        cardBImage={ProfessionalismImage}
        cardBAlt="laptop and graduate cap"
        cardBTitle="Professionalism"
        cardBDescription="Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill."
        cardCImage={SpecialityImage}
        cardCAlt="flowers"
        cardCTitle="Speciality"
        cardCDescription="Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world."
      />
    )
}

export default ChooseUs;