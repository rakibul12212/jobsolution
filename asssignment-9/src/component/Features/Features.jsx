import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css';

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('job.json')
      .then(res => res.json())
      .then(jobs => setFeatures(jobs));
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedFeatures = showAll ? features : features.slice(0, 4);

  return (
    <div>
      <div className='category'>
        <h1 className='category-title text-5xl p-10'>Featured Jobs</h1>
        <p className='category-description'>
          Explore thousands of job opportunities with all the information you need. It's your future.
        </p>
      </div>
      <div className='feature-cart'>
        {displayedFeatures.map(feature => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
      <div className='seeall-btn'>
        <button className='btn' onClick={toggleShowAll}>
          {showAll ? 'Show Less Jobs' : 'See All Jobs'}
        </button>
      </div>
    </div>
  );
};

export default Features;
