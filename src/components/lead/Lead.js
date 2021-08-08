import React from 'react';
import SellingPoints from '../selling-points/SellingPoints.js';
import '../selling-points/SellingPoints.css';
import ResourceSavingImage from '../../images/hands.png';
import PublicizeImage from '../../images/megaphone.png';
import PRBoostImage from '../../images/rocket.png';

function Lead() {
    return (
        <SellingPoints
        cardAImage={ResourceSavingImage}
        cardAAlt="hands exchanging resources"
        cardATitle="Resource saving"
        cardAParagraph="Delegate tasks for free and get results that can be used in your future work."
        cardBImage={PublicizeImage}
        cardBAlt="megaphone and media marketing"
        cardBTitle="Publicize"
        cardBParagraph="We take pride in the real-world value of the tasks that our students perform and we share them in all available channels."
        cardCImage={PRBoostImage}
        cardCAlt="rocket ship"
        cardCTitle="PR boost"
        cardCParagraph="This will increase the visibility of the company among job seekers and attract those who share the values of your company."
      />
    )
}

export default Lead;