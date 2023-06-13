import React from 'react';
import coffee from '../images/coffee.jpg'

function About() {
  return (
    <div id='about'>
   
    <div className='bg-[#221003] h-auto flex flex-col justify-center '>
      <p className='text-white text-5xl text-center mt-5 mb-4 '>About</p>
      <div className="flex p-3 mb-5 flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src={coffee} alt="coffee" className="w-85 rounded-lg h-auto" />
        </div>
        <div className="w-full mb-10  md:w-1/2 md:mb-0 px-4">
          <h2 className="text-5xl ml-4 mx-auto font-bold text-white mt-5 mb-4 md:mt-0 head">Coffee <span class=" text-[#EAB54C] head">Club</span></h2>
          <br />
          <p className="text-gray-200 ml-4">Welcome to our Coffee Club, where passion meets perfection in every cup. Immerse yourself in the artistry of specialty coffees, expertly crafted by our skilled baristas. Discover a harmonious blend of flavors, a cozy atmosphere, and a community of coffee lovers. Whether you seek a tranquil morning ritual or a place to connect with friends, our café is your haven for exceptional coffee experiences. Join us on a journey of taste, aroma, and the pure pleasure of a perfect cup of coffee.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About