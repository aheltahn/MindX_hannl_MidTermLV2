const NewRelease = ({ movieList, onSelect }) => (
    <section className="px-6 pb-12">
      <h2 className="text-2xl font-bold mb-6">New Release</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movieList.map((movie) => (
          <div  key={movie.id} onClick={() => onSelect(movie)}
            className="bg-black rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500"
            
          >
          <div className="relative">
    <img
      src={movie.image}
      alt={movie.movieName}
      className="w-full h-40 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
  </div>
            
           <div className="p-2 flex flex-col justify-center items-center ">
  <p className="text-sm">Episode {movie.episode}</p>
  <p className="text-sm font-semibold mt-4">{movie.movieName}</p>
</div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default NewRelease;
  