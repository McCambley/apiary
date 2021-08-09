import React from 'react';
import SellingPoints from '../selling-points/SellingPoints.js';
import '../selling-points/SellingPoints.css';
import { choose } from '../../arrays/why-choose-us';

function ChooseUs() {
  return (
    <SellingPoints
      componentType="choose-us"
      title="Why choose us?"
      subtitle="We have built the largest IT company in Russia. We know how to develop cool employees, and we work hard to make our clients' lives better and happier."
      data={choose}
    />
  );
}

export default ChooseUs;
