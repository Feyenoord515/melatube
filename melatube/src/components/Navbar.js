import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-pink-500  border-blue-700 px-4 py-2 flex justify-between items-center">
    <div>
        <a href="#" className="text-white font-bold text-xl">Canales para niños en YouTube</a>
      </div>
      
      <ul className="flex justify-end space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-200">Inicio</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200">Canales</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200">Acerca de</a>
        </li>
  <li>
    <a href="#" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">Regístrate</a>
  </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
