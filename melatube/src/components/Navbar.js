import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-200  border-blue-700 px-4 py-2 flex justify-between items-center">
   <div className="flex items-center justify-between bg-green-500 p-4">
  <a href="#" className="text-white font-bold text-2xl">
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="Logo" className="w-10 h-10 mr-2" />
    Canales para niños en YouTube
  </a>
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
