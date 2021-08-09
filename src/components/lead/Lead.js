import React from 'react';
import SellingPoints from '../selling-points/SellingPoints.js';
import '../selling-points/SellingPoints.css';
import { useful } from '../../arrays/why-is-it-useful.js';

function Lead() {
  return (
    <SellingPoints
      componentType="lead"
      title="Why is it useful for your company?"
      subtitle="By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness."
      data={useful}
    />
  );
}

export default Lead;
