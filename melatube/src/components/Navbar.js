import React from 'react';
import { useHistory } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { GiftIcon } from '@heroicons/react/24/outline';
import { HeartIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';


const Navbar = () => {

  const history = useHistory();

  const handleInicioClick = () => {
    window.location.reload();
  }

  const handleCanalesClick = () => {
    history.push('/channel-list');
  }
  return (
    <nav className="bg-blue-200  border-blue-700 px-4 py-2 flex justify-between items-center">
   <div className="flex items-center justify-between  p-2">
   
      <BeakerIcon className="h-6 w-6 text-pink-300"/>
      <GiftIcon className="h-6 w-6 text-green-500" />
      <HeartIcon className="h-6 w-6 text-red-500" />
      <EllipsisHorizontalCircleIcon className="h-6 w-6 text-black-300" />
      <p>...</p>
    

</div>
      
<ul className="flex justify-end space-x-4">
      <li>
        <a href="/#" className="text-white hover:text-gray-200" onClick={handleInicioClick}>Inicio</a>
      </li>
      <li>
        <a href="/#" className="text-white hover:text-gray-200" onClick={handleCanalesClick}>Canales</a>
      </li>
      <li>
        <a href="/#" className="text-white hover:text-gray-200">Acerca de</a>
      </li>
      <li>
        <a href="/#" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">Regístrate</a>
      </li>
    </ul>
    </nav>
    
  );
};

export default Navbar;
