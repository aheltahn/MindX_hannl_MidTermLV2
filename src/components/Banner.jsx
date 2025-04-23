import React from 'react'
const Banner = ({movie}) => (
  <section className="px-6 py-8">
    <h2 className="text-2xl font-semibold mb-2">Explore</h2>
    <p className="text-gray-400 mb-6">What are you gonna watch today ?</p>

    <div className="relative rounded-lg overflow-hidden">
      <img
        src={movie.image}
        alt={movie.movieName}
        className="w-full h-[28rem] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent flex flex-col justify-end items-start p-6 ">
        <h3 className="text-2xl font-bold mb-2 ml-4">{movie.movieName}</h3>
        <p className="text-sm text-gray-300 max-w-lg mb-8 ml-4">{movie.description}</p>
      </div>
    </div>
  </section>
);

export default Banner;
