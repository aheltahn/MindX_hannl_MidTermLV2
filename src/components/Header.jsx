const Header = () => (
    <nav className="sticky top-0 z-50 bg-gray-900 flex justify-between items-center p-6 border-b border-gray-700">
      <div className="text-3xl font-bold text-white">
       Anonime
      </div>
        <a href="#" className="text-gray-400 hover:text-blue-400">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-400">
          List anime
        </a>
        <input
          type="text"
          placeholder="Search anime or movie"
          className="px-4 py-1 rounded-2xl bg-gray-800 text-white focus:outline-none"
        />
    </nav>
  );
  
  export default Header;
  