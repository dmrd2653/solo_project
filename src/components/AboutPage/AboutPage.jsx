import React from 'react';

function AboutPage() {
  return (
    <div>
      <div className="about">
        <p className='para-about'><span>Voyager</span> is a travel planner that offers 
          you a simple, subtle, and yet succinct user-friendly app on the desktop 
          (and soon to be mobile) in order for you to turn that travel bucket list 
          into real life experiences and memories. Ever feel like you have 
          an accumulation of ideas and places to visit yet are distracted 
          by life’s social media and technology? Well, this app will help 
          you in that it will neither distract you with ideas or suggestions 
          unlike other phone apps. You are able to quickly jot down a place 
          or list of places whether for that future over-the-seas trip or going 
          to a brewery before a concert.</p>
      </div>
      <div className="tech">
        <p><h3>Technologies used:</h3>React, PostgreSQL, Node, Express, Heroku,
        Passport, Unsplash, Material UI, Javascript, CSS, HTML</p>
      </div>
    </div>
  );
}

export default AboutPage;
