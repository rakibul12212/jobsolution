import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="bg-indigo-100 flex flex-col lg:flex-row">
      <div className="py-8 lg:py-20">
        <div className="heading lg:w-1/2 p-8 lg:pl-16 lg:pr-12">
          <h1 className="heading-title text-3xl lg:text-5xl mb-4 animate-pulse">
            One Step Closer To your <span className="text-color">Dream Job</span>
          </h1>
          <div className="flex flex-col">
            <p className="heading-description text-lg lg:text-xl mb-4">
              Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.
            </p>
            
          </div>
        </div>
        
      </div>
      <div className="header-img lg:w-1/2">
        <img src="https://purepng.com/public/uploads/large/purepng.com-thinking-manthinking-manpersongentle-men-thinkingthinking-brainthinking-people-1421526976861rrane.png" alt="Thinking Man" className="w-full" />
      </div>
    </div>
  );
};

export default Header;
