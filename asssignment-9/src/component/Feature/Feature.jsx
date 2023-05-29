import React from 'react';
import './Feature.css';

const Feature = (props) => {
  return (
    <div className='single-card'>
      <img src={props.feature.companyLogo} className='feature-icon ' alt='Company Logo' />
      <h1 className='text-2xl p-2'>{props.feature.jobTitle}</h1>
      <p className='text-xl p-2'>{props.feature.companyName}</p>

      <div className='flex'>
        <button className='btn-1 p-2'>{props.feature.remoteOrOnsiteR}</button>
        <button className='btn-1'>{props.feature.remoteOrOnsiteF}</button>
      </div>

      <div className='flex text-xl p-2'>
        <p>{props.feature.location}</p><br/>
        <p className='pl-5'>Salary: {props.feature.salary}</p>
      </div>

      <button className='view-btn'>View Details</button>
    </div>
  );
};

export default Feature;
